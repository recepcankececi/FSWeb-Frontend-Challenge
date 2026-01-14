import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api'
});

export const sendDataToAPI = async (data) => {
  try {
    const response = await api.post('/workintech', data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default api;
