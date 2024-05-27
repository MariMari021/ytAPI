import axios from 'axios';

const VIMEO_API_KEY = '75cd5ccf00e5dca8d3fb627dccdae26f'; 

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
