import axios from "axios"

export const fetchData = async ({ country }) => {
  const data = axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => res.data)
  return data
}

export const fetchCountry = async () => {
  const data = axios
    .get(`https://restcountries.com/v3.1/all`)
    .then((res) => res.data)
  return data
}
