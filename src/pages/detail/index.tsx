import { ContentArea } from '@/styles/GlobalStyle';
import * as s from './style';
import { LeftBottom, Top } from './view';
import RightBottom from './view/rightBottom';
import useSWR from 'swr';
import { useGetPathname } from '@/hooks/useGetPathname';

export const Detail = () => {
  const postId = useGetPathname();
  console.log(postId[1]);
  const { data: post } = useSWR(`post/${postId[1]}`);
  return (
    <s.Detail>
      {post && (
        <ContentArea>
          <Top postUser={post.postUser} title={post.title} />
          <s.Bottom>
            <LeftBottom createdAt={'2023-입력-받어'} content={post.content} />
            <RightBottom
              postUser={post.postUser}
              category={post.category}
              number={post.totalNumber}
              nickname={post.nickname}
              profileImg={''}
              userId={post.userId}
              temperature={37}
            />
          </s.Bottom>
        </ContentArea>
      )}
    </s.Detail>
  );
};
