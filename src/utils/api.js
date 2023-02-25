import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    headers: {"Content-Typer": "application/json"}
});
api.interceptors.response.use(res=>res, err=>{})

export default api;