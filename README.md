# Thunder Dragon FC Website

A modern, responsive website for Thunder Dragon FC built with React.js and Bootstrap.

## Features

- **Home Page**: Landing page with hero section, upcoming match, and recent results
- **Team Players**: Display of all team players with their positions and jersey numbers
- **Matches**: View upcoming and past matches with results
- **Sponsorship**: Information about sponsorship opportunities and current sponsors
- **Contact**: Contact form and team information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Project Structure

```
src/
├── components/     # Reusable components (Navbar, Footer, PlayerCard)
├── pages/         # Page components (Home, TeamPlayers, Matches, etc.)
├── data/          # Static data files (players, matches, sponsors)
├── App.js         # Main app component with routing
└── App.css        # Custom styles
```

## Technologies Used

- React.js
- React Router
- Bootstrap 5
- React Bootstrap

## Customization

Data files in `src/data/`:
- `players.js` - Player information
- `matches.js` - Match schedules and results
- `sponsors.js` - Sponsor information

## Note

The `node_modules` folder is not included in version control. Run `npm install` after cloning the repository to install all dependencies.
