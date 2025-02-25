import api from "./api";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
            throw new Error("Aucun token trouvé");
        }

        const response = await axios.get(`${API_URL}/users/me`, {  // Correction ici
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("API URL utilisée:", `${API_URL}/users/me`);

        // console.log("User data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Token invalide ou expiré :", error);
        localStorage.removeItem("token"); // Supprime le token s'il est invalide
        return null;
    }
};

export const updateUserProfile = async (userData) => {
    const response = await api.put("/users/me", userData);
    return response.data;
};
