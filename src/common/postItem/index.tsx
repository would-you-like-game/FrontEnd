import { useNavigateTo } from '@/hooks/useNavigateTo';
import * as s from './style';
type PostItemStyle = {
  title: string;
  nickname: string;
  postId?: number;
  currnetNubmer: number;
  totalNubmer: number;
};

export const PostItem = ({
  title,
  nickname,
  postId,
  totalNubmer,
  currnetNubmer,
}: PostItemStyle) => {
  const navigateTo = useNavigateTo();

  return (
    <s.PostItem onClick={() => navigateTo(`/detail/${postId}`)}>
      <img alt="post-item" />
      <s.Content>
        <span>{nickname}</span>
        <p>{title}</p>
        <div>
          <span>{`${currnetNubmer}/${totalNubmer} `}</span>
        </div>
      </s.Content>
    </s.PostItem>
  );
};
