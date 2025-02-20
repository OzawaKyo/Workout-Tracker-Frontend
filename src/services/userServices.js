import api from "./api";

import axios from 'axios';

export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem('token'); // Récupère le token

        if (!token) {
            throw new Error("Aucun token trouvé");
        }

        const response = await axios.get('http://localhost:5000/users/me', { // <== Correction ici
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("Token invalide ou expiré :", error);
        localStorage.removeItem('token'); // Supprime le token s'il est invalide
        return null;
    }
};



export const updateUserProfile = async (userData) => {
    const response = await api.put("/users/me", userData);
    return response.data;
};
