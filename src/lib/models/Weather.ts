import * as t from "io-ts";

export const WeatherCodec = t.type({
    temp: t.number,
    feels_like: t.number,
    temp_min: t.number,
    temp_max: t.number,
    pressure: t.number,
    humidity: t.number
});

export type TypeWeather = t.TypeOf<typeof WeatherCodec>;

export class Weather implements TypeWeather {
    public temp: number;
    public feels_like: number;
    public temp_min: number;
    public temp_max: number;
    public pressure: number;
    public humidity: number;

    constructor(
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    ) {
        this.temp = temp;
        this.feels_like = feels_like;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.pressure = pressure;
        this.humidity = humidity;
    }
}