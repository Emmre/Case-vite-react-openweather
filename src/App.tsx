import "./styles/App.css"
import { useState } from "react"
import { fetchData, fetchCountry } from "@/services"
import SearchableDropdown from "@/components/Autocomplete"
import BasicTable from "./components/Table"

function App() {
  const [country, setCountry] = useState([])
  const [weather, setWeather] = useState([])

  const handleCountry = async (e) => {
    try {
      const response = await fetchData({ country: e.target.textContent })
      setWeather(response)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <div className="container">
        <h1>Weather App</h1>
        <SearchableDropdown
          onChange={(e) => handleCountry(e)}
          country={country}
          setCountry={setCountry}
          fetchCountry={fetchCountry}
        />
        <BasicTable item={weather} />
      </div>
    </div>
  )
}

export default App
