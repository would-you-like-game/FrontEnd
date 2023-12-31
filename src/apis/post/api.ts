import { RequestPostType } from '@/type/request';
import { api } from '../api';
import { sweetAlert } from '@/utils/sweetAlert2';

// 에러코드를 받아야함 500일때랑 data 잘못됬을 떄만 받으면 되겠는데
export const onSbumitPost = async (data: RequestPostType) => {
  try {
    const response = await api.post('post', data);
    if (response.status === 200) {
      window.history.back();
    }
  } catch (error) {
    console.error('error', error);
  }
};

export const onDeletePost = async (postId: number) => {
  try {
    const response = await api.delete(`post/${postId}`);
    if (response.status === 200) {
      window.location.replace('/');
    }
  } catch (error) {
    console.error('error', error);
  }
};

export const handleJoinGame = async (postId: number) => {
  try {
    const response = await api.post(`post/player/${postId}`);
    if (response.status === 200) {
      sweetAlert('joinGame');
    }
    return response;
  } catch (error) {
    if (error.response.status === 401) {
      console.log('여긴 어떻게 해결할까?');
    }
  }
};
