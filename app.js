const API_KEY = "a128aa503677f998d047177aced21068";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=a128aa503677f998d047177aced21068&units=metric";

// DOM Elements
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");

// Elements to update
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

// Recent Searches Elements
const searchHistoryList = document.getElementById("search-history");

async function getWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    
    try {
        showLoading();
        hideError();
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found. Please check the spelling.");
            }
            throw new Error("Failed to fetch weather data. Please try again.");
        }
        
        const data = await response.json();
        displayWeather(data);
        saveToHistory(data.name); // Save standardized city name from API response
        
    } catch (err) {
        showError(err.message);
    } finally {
        hideLoading();
    }
}

function displayWeather(data) {
    // Update main weather details
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    
    // Set weather icon image source
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    
    // Update detailed weather grid metrics
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} m/s`;
    pressure.textContent = `${data.main.pressure} hPa`;
    
    weatherDisplay.classList.remove("hidden");
}

function showLoading() {
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
}

function hideError() {
    error.classList.add("hidden");
}

// LocalStorage History Functions
function saveToHistory(city) {
    let history = JSON.parse(localStorage.getItem("weatherSearchHistory")) || [];
    
    // Format city name to have standard capitalization
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    
    // Remove if already exists so we can move it to the top
    history = history.filter(item => item.toLowerCase() !== formattedCity.toLowerCase());
    
    // Add to the front of the array
    history.unshift(formattedCity);
    
    // Keep only the last 5 searched cities
    if (history.length > 5) {
        history.pop();
    }
    
    localStorage.setItem("weatherSearchHistory", JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem("weatherSearchHistory")) || [];
    searchHistoryList.innerHTML = "";
    
    if (history.length === 0) {
        searchHistoryList.innerHTML = "<li style='color: #888; font-size: 0.9rem;'>No recent searches</li>";
        return;
    }
    
    history.forEach(city => {
        const li = document.createElement("li");
        li.textContent = city;
        li.style.cursor = "pointer";
        li.style.padding = "5px 0";
        
        // Click on recent search to search again
        li.addEventListener("click", () => {
            cityInput.value = city;
            getWeather(city);
        });
        
        searchHistoryList.appendChild(li);
    });
}

// Event Listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
        cityInput.value = ""; // Clear input after searching
    }
});

// Initialize app on load
loadHistory();