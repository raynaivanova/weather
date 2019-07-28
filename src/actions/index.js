import axios from 'axios';
const API_KEY = "ca09038d336603d466e5b6e991f0bcf0";
const ROOT_URL = ` https://api.openweathermap.org/data/2.5/forecast?`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}q=${city},it&appid=${API_KEY}`;
    const request = axios.get(url);
    console.log('Request:',request);
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}

