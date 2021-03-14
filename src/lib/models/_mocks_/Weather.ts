import { Weather } from "../Weather";

const weatherData = new Weather(1,2,3,4,5,6);

export default weatherData;

export const invalidWeatherData = {
    temp: 1,
    feels_like: 2,
    temp_min: 3,
    pressure: 5,
    humidity: 6
}