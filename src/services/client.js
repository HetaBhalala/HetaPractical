import axios from "axios";


const client = axios.create({
  baseURL: 'http://44.234.205.222/events/api/home/data'    ,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export default client;
