import { Button } from '@/common';
import * as s from './style';
import { useNavigateTo } from '@/hooks';
import { onDeletePost } from '@/apis/post/api';
import useSWR from 'swr';

export const Top = ({ postId }: { postId: number }) => {
  const { data: post } = useSWR(`post/${postId}`);
  const navigateTo = useNavigateTo();

  return (
    <s.Top>
      <h2>{post.title}</h2>
      {post.postUser && (
        <s.UserButton>
          <Button
            onClick={() => navigateTo(`/edit?page=${postId}`)}
            color="white"
          >
            수정
          </Button>
          <Button onClick={() => onDeletePost(postId)}>삭제</Button>
        </s.UserButton>
      )}
    </s.Top>
  );
};
