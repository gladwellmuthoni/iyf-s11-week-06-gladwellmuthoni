# iyf-s11-week-06-gladwellmuthoni
# Week 06: Weather Dashboard

## Author
- **Name:** Gladwell Muthoni
- **GitHub:** [@gladwellmuthoni](https://github.com/gladwellmuthoni)
- **Date:** July 24, 2026.

## Project Description
A fully responsive Weather Dashboard web application that allows users to search for current weather conditions by city name. It features real-time data fetching from the OpenWeather API, dynamic UI updates, metric details (temperature, feels-like, humidity, wind speed, pressure), error handling, and persistent recent search history using localStorage.

## Technologies Used
- HTML5
- CSS3 (Custom Grid and Flexbox layouts)
- JavaScript (Async/Await, Fetch API)
- OpenWeather API
- LocalStorage API

## Features
- Real-time weather data fetching for any valid city worldwide
- Detailed weather metrics including temperature, wind speed, humidity, and pressure
- Dynamic loading and error states for robust user experience
- Recent searches tracking storing up to the last 5 searched cities using `localStorage`
- Clickable search history items for quick re-searching

## How to Run
1. Clone this repository
2. Open `index.html` using a local development server (like VS Code Live Server) in your browser

## Lessons Learned
* How to securely integrate and query an external third-party REST API using `async/await` and the Fetch API.
* Managing persistent client-side data across sessions using `localStorage` arrays.
* Handling edge cases such as HTTP error status codes (e.g., 404 Not Found) gracefully.

## Challenges Faced
* Encountered network fetch errors when loading files directly via the local file system, which was resolved by switching to a local development server to properly handle requests.
* Managing UI state changes smoothly between loading spinners, error messages, and active data cards.

## Screenshots
![Weather Dashboard Screenshot](C:\Users\Administrator\Pictures\weather dashboard.png)
