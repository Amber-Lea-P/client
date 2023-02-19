import axios from "axios";

const api = axios.create({baseURL: "/api",
headers: {"Content-Typer": "application/json"}
});

export default api;