import api from "./api";

export const getWorkouts = async () => {
    const response = await api.get("/workouts");
    return response.data;
};

export const getWorkoutById = async (workoutId) => {
    const response = await api.get(`/workouts/${workoutId}`);
    return response.data;
};

export const createWorkout = async (workoutData) => {
    const response = await api.post("/workouts", workoutData);
    return response.data;
};

export const updateWorkout = async (workoutId, workoutData) => {
    const response = await api.put(`/workouts/${workoutId}`, workoutData);
    return response.data;
};

export const deleteWorkout = async (workoutId) => {
    const response = await api.delete(`/workouts/${workoutId}`);
    return response.data;
};
