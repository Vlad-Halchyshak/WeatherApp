import logo from './logo.svg'
import './App.css'

import { useSelector } from 'react-redux'
import { Weather } from './components/weather'
import { Search } from './components/search'

function App() {
  const data = useSelector((state) => state.weather.data)
  //const loading = useSelector((state) => state.weather.loading)
  

  return (
    <div className="MainContainer">
      <h1>Weather App</h1>
      <Search />
      {data && <Weather data={data} />}
    </div>
  )
}

export default App
