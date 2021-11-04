import api from '../services/apiService';

class Locations {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
    this.shortCitiesList = null;
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ]);

    const [countries, cities] = response;
    this.countries = this.serializeCountries(countries);
    this.cities = this.serializeCities(cities);
    this.shortCitiesList = this.createShortCitisList(this.cities);

    return response;
  }

  createShortCitisList(cities) {
    // { 'city, country': null }
    // Object.entries => [key, value]
    return Object.entries(cities).reduce((acc, [key]) => {
      acc[key] = null;
      return console.log(acc);
    }, {});
  }

  serializeCountries(countries) {
    // { 'country code': {...}}
    return countries.reduce((acc, country) => {
      acc[country.code] = country;
      return acc;
    }, {});
  }

  serializeCities(cities) {
    // { 'City name, Countrie name': city.country_code === code }
    return cities.reduce((acc, city) => {
      const country_name = this.getCountryNameByCode(city.country_code);

      // Если city.name===null, то оператор 'или' выберет второй
      const city_name = city.name || city.name_translations.en;
      const key = `${city_name}, ${country_name}`;
      acc[key] = city;
      return acc;
    }, {});
  }
  getCountryNameByCode(code) {
    // { 'country code': {...}}
    return this.countries[code].name;
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
