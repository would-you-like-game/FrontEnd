import { api } from './api';

export const onSubmitLogin = async (data) => {
  const URL = import.meta.env.VITE_URL;

  console.log(URL, 'zzz');
  try {
    const response = await api.post('auth/login', data);
    if (response.status === 200) {
      const token = response.data.token;
      console.log('response', response);
      localStorage.setItem('token', token);
      console.log('token', token, response.data.token);
      // window.location.replace('/');
    }
  } catch (error) {
    console.error('error', error);
  }
};
