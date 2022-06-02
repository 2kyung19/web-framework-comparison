import axios from 'axios';

export const API = axios.create({
  baseURL: '/api/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAPI = (url) => {
  API.get(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status === 404) {
          window.location.assign(`${process.env.VUE_APP_BASE_URL}/404`);
        } else {
          console.log(err.response.status);
        }
      } else if (err.request) {
        // The client never received a response, and the request was never left
      } else {
        // Anything else
      }
    });
};
