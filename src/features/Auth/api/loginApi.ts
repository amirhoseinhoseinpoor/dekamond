import axios from 'axios';

export const fetchUser = async () => {
  const response = await axios.get('https://randomuser.me/api/?results=1&nat=us');
  return response.data.results[0];
};