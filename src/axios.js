import axios from "axios";

const instance = axios.create({
  // THE API  URL
  baseURL: "https://amazonclonepayment.herokuapp.com"
  //"http://localhost:3001"
});

export default instance;
