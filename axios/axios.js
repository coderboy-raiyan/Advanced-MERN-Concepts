const axios = require("axios").default();

const instance = axios.create({
  baseURL: "https://example.com",
  withCredentials: true,
});

/*
   Request interceptors usecases for Authorization 
*/
instance.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = `079423u4d79e8rqw90482349812094832`;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/*
   Response interceptors usecases for Authorization 
*/
instance.interceptors.response.use(
  (config) => config,
  (error) => {
    const prevRequest = error?.config;
    if (!error?.response?.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      const token = `079423u4d79e8rqw90482349812094832`;
      prevRequest.headers.Authorization = `Bearer ${token}`;
      instance(prevRequest);
    }
    return Promise.reject(error);
  }
);
