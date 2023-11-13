import { Grade } from '@/pages/mypage/view';
import * as s from './style';
import useSWR from 'swr';

export const PostUser = ({ postId }: { postId: number }) => {
  const { data: post } = useSWR(`post/${postId}`);
  const { nickname, userId } = post;
  const { data: userData } = useSWR(userId ? `user/rating/${userId}` : null);

  return (
    <s.PostUser>
      <s.UserData>
        <img src={'profileImg'} alt="profile Img" />
        <div className="data">
          <div className="nickname">{nickname}</div>
          <div className="temp">
            <s.HeartIcon color="red" />
            &nbsp;{1}
          </div>
        </div>
      </s.UserData>
      {userData && (
        <s.UserState>
          <Grade />
        </s.UserState>
      )}
    </s.PostUser>
  );
};
