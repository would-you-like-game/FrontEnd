import { RequestPostType } from '@/type/request';
import { api } from '../api';

// 에러코드를 받아야함 500일때랑 data 잘못됬을 떄만 받으면 되겠는데
export const onSbumitPost = async (data: RequestPostType) => {
  try {
    const response = await api.post('post', data);
    if (response.status === 200) {
      console.log(response.data);
    }
  } catch (error) {
    console.error('error', error);
  }
};

/**만료 된 토큰을 실어서 보내면 200이 뜨고 데이터는 제대로 등록이 안되는 것 같다
 * 일단 response는 안 옴
 */
