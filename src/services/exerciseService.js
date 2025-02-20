import api from "./api";

export const getExercises = async (params) => {
    const response = await api.get("/exercises", { params });
    return response.data;
};

export const getExerciseById = async (exerciseId) => {
    const response = await api.get(`/exercises/${exerciseId}`);
    return response.data;
};

export const addExerciseToWorkout = async (workoutId, exerciseData) => {
    const response = await api.post(`/workouts/${workoutId}/exercises`, exerciseData);
    return response.data;
};

export const updateExerciseInWorkout = async (workoutId, exerciseId, exerciseData) => {
    const response = await api.put(`/workouts/${workoutId}/exercises/${exerciseId}`, exerciseData);
    return response.data;
};

export const deleteExerciseFromWorkout = async (workoutId, exerciseId) => {
    const response = await api.delete(`/workouts/${workoutId}/exercises/${exerciseId}`);
    return response.data;
};
