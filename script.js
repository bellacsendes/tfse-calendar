// Default timezones to display
const DEFAULT_TIMEZONES = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
    'America/Los_Angeles',
    'Asia/Dubai'
];

// Storage key for localStorage
const STORAGE_KEY = 'timezone_clock_timezones';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadTimezones();
    setupEventListeners();
    updateClocks();
    
    // Update clocks every second
    setInterval(updateClocks, 1000);
});

/**
 * Load timezones from localStorage or use defaults
 */
function loadTimezones() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        window.timezones = JSON.parse(stored);
    } else {
        window.timezones = [...DEFAULT_TIMEZONES];
        saveTimezones();
    }
    renderClocks();
}

/**
 * Save timezones to localStorage
 */
function saveTimezones() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(window.timezones));
}

/**
 * Setup event listeners for controls
 */
function setupEventListeners() {
    const addBtn = document.getElementById('addBtn');
    const resetBtn = document.getElementById('resetBtn');
    const input = document.getElementById('timezoneInput');

    addBtn.addEventListener('click', addTimezone);
    resetBtn.addEventListener('click', resetToDefault);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTimezone();
        }
    });
}

/**
 * Add a new timezone
 */
function addTimezone() {
    const input = document.getElementById('timezoneInput');
    const timezone = input.value.trim();

    if (!timezone) {
        alert('Please enter a timezone');
        return;
    }

    // Validate timezone
    if (!isValidTimezone(timezone)) {
        alert(`"${timezone}" is not a valid timezone. Try: America/New_York, Europe/London, Asia/Tokyo, etc.`);
        return;
    }

    // Check for duplicates
    if (window.timezones.includes(timezone)) {
        alert(`"${timezone}" is already added`);
        return;
    }

    window.timezones.push(timezone);
    saveTimezones();
    renderClocks();
    input.value = '';
}

/**
 * Reset to default timezones
 */
function resetToDefault() {
    window.timezones = [...DEFAULT_TIMEZONES];
    saveTimezones();
    renderClocks();
}

/**
 * Validate if a timezone string is valid
 */
function isValidTimezone(timezone) {
    try {
        Intl.DateTimeFormat(undefined, { timeZone: timezone });
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Render all clock cards
 */
function renderClocks() {
    const container = document.getElementById('clockContainer');
    container.innerHTML = '';

    if (window.timezones.length === 0) {
        container.innerHTML = '<div class="empty-message">No timezones selected. Add one or reset to defaults!</div>';
        return;
    }

    window.timezones.forEach((timezone, index) => {
        const clockEl = document.createElement('div');
        clockEl.className = 'clock';
        clockEl.id = `clock-${index}`;
        clockEl.innerHTML = `
            <button class="remove-btn" data-timezone="${timezone}">×</button>
            <div class="timezone-name">${formatTimezoneName(timezone)}</div>
            <div class="time-display" id="time-${index}">--:--:--</div>
            <div class="date-display" id="date-${index}">Loading...</div>
            <div class="day-of-week" id="day-${index}"></div>
            <div class="timezone-offset" id="offset-${index}"></div>
        `;

        const removeBtn = clockEl.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => removeTimezone(timezone));

        container.appendChild(clockEl);
    });
}

/**
 * Update all clock displays
 */
function updateClocks() {
    window.timezones.forEach((timezone, index) => {
        const time = getTimeInTimezone(timezone);
        const timeEl = document.getElementById(`time-${index}`);
        const dateEl = document.getElementById(`date-${index}`);
        const dayEl = document.getElementById(`day-${index}`);
        const offsetEl = document.getElementById(`offset-${index}`);

        if (timeEl) {
            timeEl.textContent = time.timeString;
            dateEl.textContent = time.dateString;
            dayEl.textContent = time.dayOfWeek;
            offsetEl.textContent = time.offset;
        }
    });
}

/**
 * Get current time in a specific timezone
 */
function getTimeInTimezone(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long'
    });

    const parts = formatter.formatToParts(now);
    const values = {};
    parts.forEach(part => {
        values[part.type] = part.value;
    });

    const timeString = `${values.hour}:${values.minute}:${values.second}`;
    const dateString = `${values.month}/${values.day}/${values.year}`;
    const dayOfWeek = values.weekday;

    // Calculate offset
    const offset = getTimezoneOffset(timezone);

    return {
        timeString,
        dateString,
        dayOfWeek,
        offset
    };
}

/**
 * Get timezone offset from UTC
 */
function getTimezoneOffset(timezone) {
    const now = new Date();
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    
    const diffMs = tzDate - utcDate;
    const diffHours = diffMs / (1000 * 60 * 60);
    
    const sign = diffHours >= 0 ? '+' : '';
    const offset = `UTC ${sign}${diffHours.toFixed(1)}`;
    
    return offset;
}

/**
 * Format timezone name for display
 */
function formatTimezoneName(timezone) {
    return timezone
        .split('/')
        .pop()
        .replace(/_/g, ' ');
}

/**
 * Remove a timezone
 */
function removeTimezone(timezone) {
    window.timezones = window.timezones.filter(tz => tz !== timezone);
    saveTimezones();
    renderClocks();
}
