import * as s from './style';
import useSWR from 'swr';

export const LeftBottom = ({ postId }: { postId: number }) => {
  const { data: post } = useSWR(`post/get/${postId}`);

  return (
    <s.LeftBottom>
      <div className="date">{'2023-입력-받어'}</div>
      <div className="content">{post.content}</div>
    </s.LeftBottom>
  );
};
