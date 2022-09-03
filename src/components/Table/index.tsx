import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(
  name: string,
  temperature: string,
  wind: string,
  humidity: number,
  pressure: number
) {
  return { name, temperature, wind, humidity, pressure }
}

const BasicTable = ({ item }) => {
  const { main = {}, wind = {}, name = "" } = item || {}
  const { temp_max = "", temp_min = "", humidity = "", pressure = "" } = main
  const { speed = "", deg = "", gust = "" } = wind

  const rows = [
    createData(
      name,
      temp_max && temp_min ? `Min: ${temp_min} / Max:  ${temp_max}` : "",
      speed && deg ? `Speed: ${speed} / Deg: ${deg}` : "",
      humidity,
      pressure
    ),
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Weather</TableCell>
            <TableCell align="right">Temperature (Minimum / Maximum)</TableCell>
            <TableCell align="right">Wind (Speed and direction)</TableCell>
            <TableCell align="right">Humidity</TableCell>
            <TableCell align="right">Pressure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.temperature}</TableCell>
              <TableCell align="right">{row.wind}</TableCell>
              <TableCell align="right">{row.humidity}</TableCell>
              <TableCell align="right">{row.pressure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
