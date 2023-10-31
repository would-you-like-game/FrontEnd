import { api } from './api';

export const onSubmitLogin = async (data) => {
  try {
    const response = await api.post('auth/login', data);
    if (response.status === 200) {
      const token = response.data.token;
      console.log('token', token, response.data.token)
      localStorage.setItem('token', token);
      console.log('token', token, response.data.toke)
      // window.location.replace('/');
    }
  } catch (error) {
    console.error('error', error);
  }
};
