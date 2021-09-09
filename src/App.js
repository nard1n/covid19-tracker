import { FormControl, Select, MenuItem } from '@material-ui/core';
import Header from './components/Header';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ))
        setCountries(countries);
      })
    } 
    getCountriesData();
  }, [countries])

  return (
    <div className="app">
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          {
            countries.map((country) => (
              <MenuItem value="{country.value}">{country.name}</MenuItem>
            ))
          }

        </Select>
      </FormControl>
      </div>

      <Header />

      {/* title + select input dropdown fiels */}

      {/* 3 Info boxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
