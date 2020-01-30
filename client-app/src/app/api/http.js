import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const responseBody = response => response.data;

const request = {
  get: (url, order) => {
    const params = new URLSearchParams();
    if (order) params.append('order', order);

    return http.get(url, { params }).then(responseBody);
  }
};

export default request;
