import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyC1Jsa0J6HAC1ltr8V8KiMDKY03o7WQVYo'; // Substitua pela sua chave da API do YouTube

export const buscarVideos = async (query) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 10,
      key: YOUTUBE_API_KEY,
    },
  });
  return response.data.items;
};