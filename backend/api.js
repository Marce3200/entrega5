import axios from "axios";
// require("dotenv").config();
const url_api = "https://udd-0701-production.up.railway.app";

export const getUsers = async () => {
  // console.log(process.env.REACT_APP_API);
  const result = await axios.get(`${url_api}/user/all`);
  // console.log(result);
  return result.data.users;
}