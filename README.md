# Valorant Tracker

Valorant Tracker is a React + Vite web app that lets you search for a player by Riot ID and view their profile, current rank, and recent match data.
Yes the UI is indeed made with AI. My purpose for making this was to get familiar with working with APIs. Had fun and learned a lot.

## Features

- Search any player using the format `name#tag`
- View account details like region, account level, and player card
- See current competitive rank and RR progress
- Browse the player's recent matches with map, mode, agent, result, and K/D/A
- Navigate between profile, act rank, and matches pages with React Router

## Tech Stack

- React
- Vite
- React Router
- HenrikDev Valorant API

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add your API key:

```env
VITE_HENRIK_API_KEY=your_api_key_here
```

you can get the API key from "https://docs.henrikdev.xyz/authentication-and-authorization" for free

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown by Vite in your browser.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Project Structure

- `src/App.jsx` handles app state and routing
- `src/api/valorant.js` fetches player, MMR, and match data
- `src/components/` contains reusable UI components
- `src/PAGES/` contains route-level pages for profile, act rank, and matches

## Notes

- The app depends on the HenrikDev Valorant API being available and your API key being valid.
- Search input must use the Riot ID format `name#tag`.
