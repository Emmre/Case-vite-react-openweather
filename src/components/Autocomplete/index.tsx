import * as React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import CircularProgress from "@mui/material/CircularProgress"

const SearchableDropdown = ({
  country,
  setCountry,
  fetchCountry,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false)
  const loading = open && country.length === 0

  React.useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    if (!country.length) {
      ;(async () => {
        const response = await fetchCountry() // For demo purposes.

        if (active) {
          setCountry([...response])
        }
      })()
    }

    return () => {
      active = false
    }
  }, [loading])

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      onChange={onChange}
      isOptionEqualToValue={(option, value) =>
        option.name.common === value.name.common
      }
      getOptionLabel={(option) => option.name.common}
      options={country.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      )}
      loading={loading}
      clearIcon={null}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Country"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  )
}

export default SearchableDropdown
