import axios from 'axios'

const appID = '77860b274023bf098fc6e30585f565f2'

export const WeatherApi = {
  getWeather(city) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}`
    )
  },
}
