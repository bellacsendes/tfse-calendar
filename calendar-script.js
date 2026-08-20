// TFSE Handball Match Data
const matches = [
    {
        round: 1,
        date: '2026-09-05',
        time: '16:00',
        summary: 'FERENCVÁROSI TC U20 – TFSE Csapatsportok Kft.',
        location: 'Budapest - Elek Gyula Aréna',
        type: 'away'
    },
    {
        round: 2,
        date: '2026-09-10',
        time: '18:00',
        summary: 'TFSE Csapatsportok Kft. – Borsod Sport Klub Kézilabda KFT',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 3,
        date: '2026-09-19',
        time: '16:00',
        summary: 'TFSE Csapatsportok Kft. – Kozármisleny Kézilabda Akadémia',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 12,
        date: '2026-09-26',
        time: '18:00',
        summary: 'Zengő Alföld Orosházi Kézilabda Akadémia – TFSE Csapatsportok Kft.',
        location: 'Orosháza - Városi Sportcsarnok',
        type: 'away'
    },
    {
        round: 4,
        date: '2026-10-04',
        time: '16:00',
        summary: 'Érd – TFSE Csapatsportok Kft.',
        location: 'Érd - Érd Aréna',
        type: 'away'
    },
    {
        round: 5,
        date: '2026-10-11',
        time: '17:00',
        summary: 'TFSE Csapatsportok Kft. – Győri ETO KC U20',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 6,
        date: '2026-10-16',
        time: '18:00',
        summary: 'Szent István KNKFT. – TFSE Csapatsportok Kft.',
        location: 'Budapest - Fervas Multifunkcionális Kézilabdacsarnok',
        type: 'away'
    },
    {
        round: 7,
        date: '2026-10-31',
        time: '14:00',
        summary: 'TFSE Csapatsportok Kft. – KVSE Nonprofit Kft.',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 8,
        date: '2026-11-07',
        time: '18:00',
        summary: 'Békéscsabai Előre Női Kézilabda Sportszolgáltató – TFSE Csapatsportok Kft.',
        location: 'Békéscsaba - Városi Sportcsarnok',
        type: 'away'
    },
    {
        round: 9,
        date: '2026-11-14',
        time: '16:00',
        summary: 'DVSC SKYLINE U20 – TFSE Csapatsportok Kft.',
        location: 'Debrecen - Hódos Imre Rendezvénycsarnok',
        type: 'away'
    },
    {
        round: 10,
        date: '2026-11-22',
        time: '18:00',
        summary: 'Tempo KSE – TFSE Csapatsportok Kft.',
        location: 'Gyál - Gyáli Sportcsarnok és Kézilabda Képzési Központ',
        type: 'away'
    },
    {
        round: 13,
        date: '2026-12-05',
        time: '16:00',
        summary: 'TFSE Csapatsportok Kft. – Hajdúnánás KN KFT',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 11,
        date: '2026-12-13',
        time: '17:00',
        summary: 'TFSE Csapatsportok Kft. – Pázmánd Női Kézilabda Kft.',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 14,
        date: '2027-01-16',
        time: '15:30',
        summary: 'SZNKSE - mateco – TFSE Csapatsportok Kft.',
        location: 'Szigetszentmiklós - SZKSK Kézilabda Csarnok',
        type: 'away'
    },
    {
        round: 15,
        date: '2027-01-24',
        time: '12:00',
        summary: 'TFSE Csapatsportok Kft. – ENUSE SPORT KFT',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 16,
        date: '2027-01-30',
        time: '12:00',
        summary: 'TFSE Csapatsportok Kft. – FERENCVÁROSI TC U20',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 17,
        date: '2027-02-05',
        time: '18:30',
        summary: 'Borsod Sport Klub Kézilabda KFT – TFSE Csapatsportok Kft.',
        location: 'Kazincbarcika - Don Bosco Szalézi Sportcsarnok',
        type: 'away'
    },
    {
        round: 18,
        date: '2027-02-13',
        time: '18:00',
        summary: 'Kozármisleny Kézilabda Akadémia – TFSE Csapatsportok Kft.',
        location: 'Kozármisleny - Városi Sportcsarnok',
        type: 'away'
    },
    {
        round: 19,
        date: '2027-02-21',
        time: '14:00',
        summary: 'TFSE Csapatsportok Kft. – Érd',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 20,
        date: '2027-02-28',
        time: '16:00',
        summary: 'Győri ETO KC U20 – TFSE Csapatsportok Kft.',
        location: 'Győr - Magvassy Mihály Sportcsarnok',
        type: 'away'
    },
    {
        round: 21,
        date: '2027-03-14',
        time: '18:00',
        summary: 'TFSE Csapatsportok Kft. – Szent István KNKFT.',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 22,
        date: '2027-03-20',
        time: '18:00',
        summary: 'KVSE Nonprofit Kft. – TFSE Csapatsportok Kft.',
        location: 'Komárom - Városi Sportcsarnok',
        type: 'away'
    },
    {
        round: 23,
        date: '2027-03-28',
        time: '18:00',
        summary: 'TFSE Csapatsportok Kft. – Békéscsabai Előre Női Kézilabda',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 24,
        date: '2027-04-04',
        time: '14:30',
        summary: 'TFSE Csapatsportok Kft. – DVSC SKYLINE U20',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 25,
        date: '2027-04-18',
        time: '11:00',
        summary: 'TFSE Csapatsportok Kft. – Tempo KSE',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 26,
        date: '2027-04-24',
        time: '18:00',
        summary: 'Pázmánd Női Kézilabda Kft. – TFSE Csapatsportok Kft.',
        location: 'Gárdony - Gárdonyi Géza Ált. Isk. Sportcsarnok',
        type: 'away'
    },
    {
        round: 27,
        date: '2027-05-02',
        time: '18:00',
        summary: 'TFSE Csapatsportok Kft. – Zengő Alföld Orosházi Kézilabda Akadémia',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 28,
        date: '2027-05-08',
        time: '17:00',
        summary: 'Hajdúnánás KN KFT – TFSE Csapatsportok Kft.',
        location: 'Hajdúnánás - Hódos Imre Városi Sport és Rendezvénycsarnok',
        type: 'away'
    },
    {
        round: 29,
        date: '2027-05-16',
        time: '18:00',
        summary: 'TFSE Csapatsportok Kft. – SZNKSE - mateco',
        location: 'Budapest - Dr Koltai Jenő Sportcsarnok',
        type: 'home'
    },
    {
        round: 30,
        date: '2027-05-23',
        time: '16:00',
        summary: 'ENUSE SPORT KFT – TFSE Csapatsportok Kft.',
        location: 'Cegléd - Gál József Sportcsarnok',
        type: 'away'
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderMatches(matches);
    setupEventListeners();
    updateStats();
});

/**
 * Setup event listeners
 */
function setupEventListeners() {
    const filterBtn = document.getElementById('filterBtn');
    const filterPanel = document.getElementById('filterPanel');
    const searchInput = document.getElementById('searchInput');
    const monthFilter = document.getElementById('monthFilter');
    const subscribeBtn = document.getElementById('subscribeBtn');

    filterBtn.addEventListener('click', () => {
        filterPanel.style.display = filterPanel.style.display === 'none' ? 'flex' : 'none';
    });

    searchInput.addEventListener('input', filterMatches);
    monthFilter.addEventListener('change', filterMatches);
    subscribeBtn.addEventListener('click', subscribeToCalendar);
}

/**
 * Filter matches based on search and month
 */
function filterMatches() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const monthTerm = document.getElementById('monthFilter').value;

    const filtered = matches.filter(match => {
        const matchesSearch = match.summary.toLowerCase().includes(searchTerm) ||
                            match.location.toLowerCase().includes(searchTerm);
        const matchesMonth = monthTerm === '' || match.date.startsWith(monthTerm);
        return matchesSearch && matchesMonth;
    });

    renderMatches(filtered);
}

/**
 * Render match cards
 */
function renderMatches(matchesToRender) {
    const container = document.getElementById('matchesContainer');
    
    if (matchesToRender.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h2>Nincs találat</h2>
                <p>Próbálj meg más szűrési feltételeket.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = matchesToRender.map((match, index) => `
        <div class="match-card ${match.type}">
            <div class="match-header">
                <span class="match-round">${match.round}. forduló</span>
                <span class="match-badge ${match.type === 'home' ? 'badge-home' : 'badge-away'}">
                    ${match.type === 'home' ? '🏠 Otthon' : '✈️ Idegenben'}
                </span>
                <div class="match-date">
                    📅 ${formatDate(match.date)} • 🕐 ${match.time}
                </div>
            </div>

            <div class="match-summary">
                ${match.summary}
            </div>

            <div class="match-details">
                <div class="detail-item">
                    <span class="detail-icon">📍</span>
                    <div class="detail-text">
                        <strong>Helyszín</strong>
                        ${match.location}
                    </div>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">⏰</span>
                    <div class="detail-text">
                        <strong>Időpont</strong>
                        ${match.date} ${match.time}
                    </div>
                </div>
            </div>

            <div class="match-actions">
                <button class="action-btn btn-add-calendar" onclick="addToCalendar(${index})">
                    📅 Naptárhoz hozzáadás
                </button>
                <a href="https://maps.apple.com/?address=${encodeURIComponent(match.location)}" 
                   class="action-btn btn-add-maps" target="_blank">
                    🗺️ Térképen megtekintés
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * Format date to readable Hungarian format
 */
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00Z');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('hu-HU', options).format(date);
}

/**
 * Update statistics
 */
function updateStats() {
    const homeMatches = matches.filter(m => m.type === 'home').length;
    const awayMatches = matches.filter(m => m.type === 'away').length;

    document.getElementById('matchCount').textContent = matches.length;
    document.getElementById('homeCount').textContent = homeMatches;
    document.getElementById('awayCount').textContent = awayMatches;
}

/**
 * Add single match to calendar
 */
function addToCalendar(index) {
    const match = matches[index];
    const startDate = new Date(`${match.date}T${match.time}:00`);
    
    // Calculate end time (assuming 90 minutes for a handball match)
    const endDate = new Date(startDate.getTime() + 90 * 60000);

    const event = {
        title: match.summary.replace(' – ', ' vs '),
        dates: [
            startDate.toISOString().replace(/[-:]/g, '').slice(0, -4) + 'Z',
            endDate.toISOString().replace(/[-:]/g, '').slice(0, -4) + 'Z'
        ].join('/'),
        details: match.location,
        location: match.location
    };

    // Create calendar URL for Apple Calendar
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    
    // For Apple Calendar, create an ICS format
    const icsContent = generateICS(match);
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const a = document.createElement('a');
    a.href = url;
    a.download = `TFSE-Match-${match.round}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Generate ICS format for a single match
 */
function generateICS(match) {
    const startDateTime = `${match.date.replace(/-/g, '')}T${match.time.replace(/:/g, '')}00`;
    const endDateTime = `${match.date.replace(/-/g, '')}T${addMinutes(match.time, 90).replace(/:/g, '')}00`;

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TFSE//Női NB I/B//HU
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:tfse-match-${match.round}-${match.date}@tfse
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').slice(0, -4)}Z
DTSTART:${startDateTime}
DTEND:${endDateTime}
SUMMARY:${match.round}. forduló - ${match.summary}
LOCATION:${match.location}
DESCRIPTION:TFSE Női NB I/B mérkőzés
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Holnap mérkőzés!
END:VALARM
END:VEVENT
END:VCALENDAR`;
}

/**
 * Add minutes to time string
 */
function addMinutes(timeStr, minutes) {
    const [hours, mins] = timeStr.split(':').map(Number);
    const totalMinutes = hours * 60 + mins + minutes;
    const newHours = Math.floor(totalMinutes / 60) % 24;
    const newMins = totalMinutes % 60;
    return `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')}`;
}

/**
 * Subscribe to full calendar
 */
function subscribeToCalendar() {
    // Show instructions for subscribing to calendar
    const message = `📅 Apple Calendar Feliratkozáshoz:

1. Nyisd meg az Apple Calendar alkalmazást
2. Válaszd a "Fájl" → "Feliratkozás naptárra" opciót
3. Másolj be ezt az URL-t:
${window.location.origin}${window.location.pathname.replace('tfse-calendar.html', '')}tfse-calendar.ics

Vagy:

1. Letöltsd a .ics fájlt az "Letöltés" gombbal
2. Dupla kattintás → automatikusan megnyílik az Apple Calendar

iOS (iPhone) felhasználók:
- Tap az "Letöltés" gombra
- Nyisd meg az Apple Calendar alkalmazást
- Az esemény automatikusan hozzáadódik`;

    alert(message);
}
