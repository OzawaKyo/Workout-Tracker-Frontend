import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://workout-tracker-backend-gia6.onrender.com";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Ajouter automatiquement le token si l'utilisateur est connecté
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
