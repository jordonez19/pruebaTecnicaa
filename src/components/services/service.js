import axios from "axios";

export const fetchData = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
