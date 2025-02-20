import api from "./api";

export const login = async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
};

export const register = async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem("token");
};
