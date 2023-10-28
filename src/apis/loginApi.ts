import { api } from './api';

export const onSubmitLogin = async (data) => {
  try {
    const response = await api.post('auth/login', data);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      window.location.replace('/');
    }
  } catch (error) {
    console.error('error', error);
  }
};