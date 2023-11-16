import axios from 'axios';

export const fetchImages = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '39706325-fc42f933f9753c8c7490c2cf4';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  };

  const { data } = await axios.get(BASE_URL, { params });
  const { hits, totalHits } = data;
  return { hits, totalHits };
};
