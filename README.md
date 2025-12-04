# CSUF Event Tracker

A modern web application for discovering and tracking events at California State University Fullerton. Built with React, TypeScript, and Vite.

### Event Finder
- 🔍 **Smart Search** - Search events by title, description, location, organizer, or tags
- 🏷️ **Tag Filtering** - Filter events by categories like tech, career, arts, wellness, and more
- 🔖 **Save Events** - Bookmark events to add them to your personal dashboard

### Event Dashboard
- 📅 View all your saved events in one place
- 📱 Responsive design works on desktop, tablet, and mobile
- 🌓 Automatic dark/light mode based on system preferences

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GaballaGit/CSUF-Event-Tracker.git
   cd CSUF-Event-Tracker/
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

## Usage

### Finding Events
1. Navigate to the **Finder** page
2. Use the search bar to find specific events
3. Click tag filters to narrow down results
4. Click the bookmark icon on any event to save it to your dashboard

### Managing Your Events
1. Navigate to the **Dashboard** page
2. View all your saved events
3. Click the bookmark icon again to remove events from your dashboard

## Event Data Structure

Events are stored in `src/events/events.json` with the following structure:

```json
{
  "id": 1,
  "title": "Event Title",
  "description": "Event description",
  "date": "2024-12-10",
  "time": "14:00",
  "duration": "2 hours",
  "location": "Building Name, Room Number",
  "organizer": "Organization Name",
  "tags": ["tag1", "tag2", "tag3"],
  "image": "/assets/image-name.jpg"
}
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties

## Design Features

- Custom color scheme matching CSUF branding
- Smooth animations and transitions
- Responsive grid layouts
- Accessible form controls

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Events

1. Open `src/events/events.json`
2. Add a new event object following the structure above
3. Add the corresponding image to `public/assets/`
4. The event will automatically appear in the Finder

## Contributing

This is a student project for California State University Fullerton. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request