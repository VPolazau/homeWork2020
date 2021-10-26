import axios from "axios";
import config from "../config/apiConfig.js";

class Api {
  constructor(config) {
    this.url = config.url;
  }
}

const api = new Api(config);

export default api;
