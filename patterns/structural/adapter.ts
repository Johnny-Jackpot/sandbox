interface WeatherAPI {
  getTempC(): number;

  getHumidity(): number;

  getWindSpeedKph(): number;
}

interface WeatherApp {
  getTempF(): number;

  getHumidity(): number;

  getWindSpeedMph(): number;
}

class WeatherAdapter implements WeatherApp {
  constructor(private api: WeatherAPI) {
  }

  getTempF(): number {
    return this.api.getTempC() * 1.8 + 32;
  }

  getHumidity(): number {
    return this.api.getHumidity();
  }

  getWindSpeedMph(): number {
    return this.api.getWindSpeedKph() / 1.60934;
  }
}

class WeatherAPIImpl implements WeatherAPI {
  getHumidity(): number {
    return 0;
  }

  getTempC(): number {
    return 0;
  }

  getWindSpeedKph(): number {
    return 0;
  }
}

const weather = new WeatherAdapter(new WeatherAPIImpl());
if (weather.getTempF() > 75) {
  console.log("It's hot outside");
}

if (weather.getWindSpeedMph() > 10) {
  console.log("It's windy outside");
}