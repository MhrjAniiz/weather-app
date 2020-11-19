import axios from "axios";

const API_KEY = "bb8e79a441c864457a288b4b891ebdfe";
export default axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
  params: {
    appid: API_KEY,
  },
});
