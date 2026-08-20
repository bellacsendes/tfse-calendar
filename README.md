# World Clock - Multi-Timezone Digital Clock

A beautiful, responsive web application that displays the current time across multiple time zones around the world.

## Features

✨ **Key Features:**
- 🌍 Display current time in multiple time zones simultaneously
- 🎨 Modern, responsive design with beautiful gradient background
- ⏰ Real-time updates every second
- ➕ Add custom time zones dynamically
- ✖️ Remove individual time zones
- 🔄 Reset to default time zones
- 💾 Persistent storage using localStorage
- 📱 Mobile-friendly responsive layout
- 🌙 Dark mode optimized interface

## Default Time Zones

The clock comes pre-configured with these major world time zones:
- America/New_York (Eastern Time)
- Europe/London (GMT/BST)
- Asia/Tokyo (Japan Standard Time)
- Australia/Sydney (Australian Eastern Time)
- America/Los_Angeles (Pacific Time)
- Asia/Dubai (Gulf Standard Time)

## How to Use

### View Current Time
Simply open `index.html` in your web browser to see the current time in all configured time zones.

### Add a New Time Zone
1. Enter a time zone identifier in the input field (e.g., `Asia/Bangkok`, `Europe/Paris`)
2. Click the "Add Timezone" button or press Enter
3. The new time zone will appear immediately

### Remove a Time Zone
Click the **×** button on any clock card to remove that time zone.

### Reset to Defaults
Click the "Reset to Default" button to restore the original set of time zones.

## Valid Time Zone Identifiers

Here are some common time zone identifiers you can use:

**North America:**
- `America/New_York`
- `America/Chicago`
- `America/Denver`
- `America/Los_Angeles`
- `America/Anchorage`
- `Pacific/Honolulu`
- `Canada/Eastern`
- `Canada/Central`
- `Canada/Mountain`
- `Canada/Pacific`

**South America:**
- `America/Argentina/Buenos_Aires`
- `America/Sao_Paulo`
- `America/Santiago`
- `America/Caracas`

**Europe:**
- `Europe/London`
- `Europe/Paris`
- `Europe/Berlin`
- `Europe/Madrid`
- `Europe/Rome`
- `Europe/Amsterdam`
- `Europe/Brussels`
- `Europe/Vienna`
- `Europe/Prague`
- `Europe/Warsaw`
- `Europe/Moscow`
- `Europe/Istanbul`
- `Europe/Athens`

**Africa:**
- `Africa/Cairo`
- `Africa/Johannesburg`
- `Africa/Lagos`
- `Africa/Nairobi`

**Asia:**
- `Asia/Dubai`
- `Asia/Bangkok`
- `Asia/Hong_Kong`
- `Asia/Shanghai`
- `Asia/Tokyo`
- `Asia/Seoul`
- `Asia/Singapore`
- `Asia/Kolkata`
- `Asia/Bangkok`
- `Asia/Jakarta`
- `Asia/Manila`

**Oceania:**
- `Australia/Sydney`
- `Australia/Melbourne`
- `Australia/Brisbane`
- `Australia/Perth`
- `Pacific/Auckland`
- `Pacific/Fiji`

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript (Vanilla)**: No dependencies required
- **Web APIs**: Intl API for timezone handling, localStorage for persistence

### How It Works

1. **Timezone Handling**: Uses the JavaScript `Intl.DateTimeFormat` API with the `timeZone` option to accurately display time in different zones
2. **Real-time Updates**: Automatically updates every second using `setInterval()`
3. **Persistent Storage**: Saves selected time zones to browser's `localStorage`
4. **Offset Calculation**: Dynamically calculates UTC offset for each timezone

### Browser Support
- Chrome 24+
- Firefox 29+
- Safari 10+
- Edge (all versions)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## File Structure

```
tfse-calendar/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Installation

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. No additional dependencies or setup required!

## Future Enhancements

Possible additions to the project:
- [ ] 12-hour/24-hour time format toggle
- [ ] Dark/Light theme switcher
- [ ] Analog clock display option
- [ ] Alarm functionality
- [ ] Timezone search/autocomplete
- [ ] Export/import timezone configurations
- [ ] Ability to set a "home" timezone for comparison
- [ ] Weather information integration
- [ ] Holiday calendar integration

## License

This project is open source and available for personal and commercial use.

## Author

Created with ❤️ as a practical timezone reference tool.

---

**Enjoy keeping track of time around the world!** 🌐
