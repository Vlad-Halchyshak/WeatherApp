import logo from './logo.svg'
import './App.css'

import { useSelector } from 'react-redux'
import { Weather } from './components/weather'
import { Search } from './components/search'
import { Loading } from './components/loader'

function App() {
  const data = useSelector((state) => state.weather.data)
  
  

  return (
    <div className="MainContainer">
      <h1>Weather App</h1>
      <Search />
      {data && <Weather data={data} />}
    
    </div>
  )
}

export default App
