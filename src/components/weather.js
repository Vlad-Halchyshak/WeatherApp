import React from 'react'

export const Weather = ({ data }) => {
  const celsius = (data.data.main.temp - 273.15).toFixed(0)
  const real_feel = (data.data.main.feels_like - 273.15).toFixed(0)

  return (
    <div className="weather_container">
      <div>
        {data.data.name}, {data.data.sys.country}
      </div>
      <div className="image">
        <img
          src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}.png`}
        />
        <p>{data.data.weather[0].main}</p>
      </div>
      <div> Temparature: {celsius}°С</div>
      <div>Real feel: {real_feel}°С</div>
      <div>Wind: {data.data.wind.speed} km/h</div>
      <div>Humidity: {data.data.main.humidity} %</div>
    </div>
  )
}
