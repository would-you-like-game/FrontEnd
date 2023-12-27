import { useNavigateTo } from '@/hooks/useNavigateTo';
import fallbackImg from '@/assets/fallbackImg.jpg';
import * as s from './style';
import { Post } from '@/type/response';

export const PostItem = ({
  title,
  nickname,
  postId,
  currentNumber,
  totalNumber,
  userImg,
}: Post) => {
  const navigateTo = useNavigateTo();

  return (
    <s.PostItem onClick={() => navigateTo(`/detail/${postId}`)}>
      <img src={userImg ?? fallbackImg} />
      <s.Content>
        <span>{nickname}</span>
        <p>{title}</p>
        <div>
          <span>{`모집 : ${currentNumber} /  ${totalNumber} `}</span>
        </div>
      </s.Content>
    </s.PostItem>
  );
};
