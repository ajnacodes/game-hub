import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ff4e3a870a57410395d020f1b38d1f8c",
  },
});
