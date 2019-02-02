import axios from "axios";
const BASEURL = "https://api.nasa.gov/planetary/apod";
const APIKEY = "?apikey=Y88kHDg6nfyumk5SGBN8sK1B5f4GoeOWqd98Hgdy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

var url = "https://api.nasa.gov/planetary/apod?api_key=Y88kHDg6nfyumk5SGBN8sK1B5f4GoeOWqd98Hgdy";

