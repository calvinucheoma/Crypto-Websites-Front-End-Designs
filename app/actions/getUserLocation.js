import axios from 'axios';

export const getLocation = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    return response.data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    return null;
  }
};
