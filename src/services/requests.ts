import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

instance.interceptors.request.use(
  async (config: any) => {
    //TO_DO check token
    const token = '';
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (res: any) => {
    //TO DO process response
    return res;
  },
  async (error) => {
    //TO DO handle error response
    return Promise.reject(error);
  }
);
export default instance;
