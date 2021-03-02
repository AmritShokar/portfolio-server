import * as t from "io-ts";

export const WeatherCodec = t.type({
    temp: t.number,
    feels_like: t.number,
    temp_min: t.number,
    temp_max: t.number,
    pressure: t.number,
    humidity: t.number
});

export type Weather = t.TypeOf<typeof WeatherCodec>;