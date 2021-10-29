import api from "../services/apiService";

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
  getCitiesByCountryCode(code) {
    return this.cities.filter((cities) => cities.country_code === code);
  }
}

const locations = new Locations(api);

export default locations;
