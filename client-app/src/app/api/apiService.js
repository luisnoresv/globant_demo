import request from './http';

const ApiService = {
  get: order => request.get('/presidents', order)
};

export default ApiService;
