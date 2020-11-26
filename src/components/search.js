import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather} from '../redux/weatherRcer'

export const Search = () => {
  const error = useSelector((state) => state.weather.error)
  

  const [city, setCity] = useState('')
  const [alert, setAlert] = useState('city is required')
  const [alertBoolean, setAlertBoolean] = useState(false)
  const [HandleError, setHandleError] = useState(error)
  
console.log(HandleError)
  const dispatch = useDispatch()
  
 useEffect(() => {
   setHandleError(error)
 }, [error])
  
  const changeHandle = (e) => {
    setCity(e.currentTarget.value)
  }
  const submitHandle = (e) => {
    e.preventDefault()

    if (city.trim() === '') {
      setAlert(alert)
      setAlertBoolean(true)
      
    } else if (city.trim() !== '') {
      setAlertBoolean(false)
    }
    
    dispatch(getWeather(city))
    setCity('')
  }

  return (
    <div className="search_form">
      {alertBoolean && alert && <div className="alert">{alert} </div>}
       <div className="error">{HandleError}</div>
      <form onSubmit={submitHandle}>
        <input
          value={city}
          type="text"
          placeholder="Enter city"
          onChange={changeHandle}
        />
        <button >Search</button>
      </form>
    </div>
  )
}
