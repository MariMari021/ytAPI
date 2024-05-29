import axios from 'axios';

const VIMEO_API_KEY = ''; 

export const buscarVideosVimeo = async (query) => {
  const response = await axios.get('https://api.vimeo.com/videos', {
    params: {
      query,
      per_page: 10,
    },
    headers: {
      Authorization: `Bearer ${VIMEO_API_KEY}`,
    },
  });
  return response.data.data;
};
