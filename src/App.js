import { FormControl, Select, MenuItem } from '@material-ui/core';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState([
    'USA', 'UK', 'Canada'
  ]);
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
              <MenuItem value="{country}">{country}</MenuItem>
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
