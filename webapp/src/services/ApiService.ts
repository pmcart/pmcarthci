import axios from 'axios';

const API_URL = 'https://webapihci.azurewebsites.net/api';

export const VisitSearch = async (patientName: string) => {
  try {
    const response = await axios.get(`${API_URL}/visits/search`, {
      params: { patientName },
      headers: {
        'API_KEY': 'randomtestkey'
    }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching visit data:', error);
    return [];
  }
};