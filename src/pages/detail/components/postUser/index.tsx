import * as s from './style';
import useSWR from 'swr';

export const PostUser = ({ postId }: { postId: number }) => {
  const { data: post } = useSWR(`post/get/${postId}`);
  const { nickname } = post;
  return (
    <s.PostUser>
      <img src={'profileImg'} alt="profile Img" />
      <s.UserData>
        <div className="nickname">{nickname}</div>
        <div className="temp">
          <s.HeartIcon color="red" />
          &nbsp;{37}
        </div>
      </s.UserData>
    </s.PostUser>
  );
};
