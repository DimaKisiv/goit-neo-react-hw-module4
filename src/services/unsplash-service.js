import axios from "axios";
const unsplash_api_url = "https://api.unsplash.com/";
const unsplash_access_key = "KW11PB28KJvPUyPIseGUPw23M_1TClPJjUtvRP0WvFs";
axios.defaults.headers.common["Authorization"] =
  "Client-ID " + unsplash_access_key + " " + unsplash_access_key;

export default function GetPhotos(keyword, page) {
  return axios
    .get(unsplash_api_url + "search/photos", {
      params: {
        query: keyword,
        page: page,
        per_page: 10,
      },
    })
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.error("Error fetching photos:", error);
      throw error;
    });
}
