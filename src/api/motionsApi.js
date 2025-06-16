import axiosClient from './axiosClient';


export const getAllMotions = async () => {
  try {
    const response = await axiosClient.get('/motions');
    return response.data; 
  } catch (error) {
    console.error('Error al obtener los motions:', error);
    throw error; 
  }
};

// Aquí luego agregaremos:
// - getMotionById
// - createMotion
// - updateMotion
// - deleteMotion
