import request from './http';

const ApiService = {
  get: () => request.get('/presidents/')
};

export default ApiService;
