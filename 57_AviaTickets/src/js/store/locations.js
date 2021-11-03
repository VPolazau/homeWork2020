import api from '../services/apiService';

class Locations {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ]);

    const [countries, cities] = response;
    this.countries = countries;
    this.cities = cities;

    return response;
  }

  serializeCountries(countries) {
    // { 'country code': {...}}
    return countries.reduce((acc, country)=>{
      acc[country.code] = country;
      return acc;
    },{})
  }

  serializeCities(city){
    // { 'City name, Countrie name': city.country_code === code   }
  }

  getCitiesByCountryCode(code) {
    return this.cities.filter(cities => cities.country_code === code);
  }
}

const locations = new Locations(api);

export default locations;

// { 'city, country': null }
// [{},{}]
// { 'City': {...} } => cities[code]
