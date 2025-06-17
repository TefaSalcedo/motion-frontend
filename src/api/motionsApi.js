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


export const getIdMotion = async (id) => {
  try {
    const response = await axiosClient.get(`/motions/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error al obtener el motion:', error);
    throw error; 
  }
};

export const createMotion = async (motionData) => {
  try {
    const response = await axiosClient.post('/motions', motionData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el motion:', error);
    throw error;
  }
};

export const updateMotion = async (id, motionData) => {
  try {
    const response = await axiosClient.put(`/motions/${id}`, motionData);
      return response.data;
  } catch (error) {
      console.error('Error al actualizar el motion:', error);
      throw error;
  }
};

export const deleteMotion = async (id) => {
  try {
    const response = await axiosClient.delete(`/motions/${id}`);
    return response.data;
  } catch (error) {
      console.error('Error al eliminar el motion:', error);
    throw error;
  }
};

