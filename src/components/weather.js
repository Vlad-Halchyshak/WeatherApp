import React from 'react'
import { useSelector } from 'react-redux'
import { Loading } from './loader'

export const Weather = ({ data }) => {
  const celsius = (data.data.main.temp - 273.15).toFixed(0)
  const real_feel = (data.data.main.feels_like - 273.15).toFixed(0)
  const loading = useSelector((state) => state.weather.loading)

  return (
    
    <div className="weather_container">
      {loading ? <Loading/> : null}
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
