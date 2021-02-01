import axios from "axios";

export const AXIOS = axios.create({
    baseURL: `http://${process.env.REACT_APP_HOST ?? "localhost"}:${process.env.REACT_APP_PORT ?? "8080"}`
});