import { FormControl, Select, MenuItem, CardContent, Card } from '@material-ui/core';
import Header from './components/Header';
import './App.css';
import { useState, useEffect } from 'react';
import InfoBox from './components/InfoBox';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

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
        ));
        setCountries(countries);
      })
    } 
    getCountriesData();
  }, [countries])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value; 
    setCountry(countryCode);
  }

  return (
    
    <div className="app">
      <div className="app__left">
        <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value={country}
            onChange={onCountryChange}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

          </Select>
        </FormControl>
        </div>

        <Header />

        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={456}  total={200} />
          <InfoBox title="Recovered" cases={678}  total={123} />
          <InfoBox title="Deaths" cases={2345}  total={456} />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
            {/* Table */}
          <h3>Worldwide new cases</h3>
            {/* Graph */}
        </CardContent>

      </Card>
    </div>
  );
}

export default App;
