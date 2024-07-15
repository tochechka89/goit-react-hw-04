import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const ACCESS_KEY = "m_w47b36q5_Jo_JQS3otzDhFy5mBtTz798Vl9Mb7Z-M";

export const searchImage = async (query, page) => {
  const res = await axios.get(`/search/photos`, {
      params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 9,
      orientation: 'landscape',
    },
  });

  return res.data;
};