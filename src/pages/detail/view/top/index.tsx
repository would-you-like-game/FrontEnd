import { Button } from '@/common';
import * as s from './style';

export const Top = ({
  title,
  postUser,
}: {
  title: string;
  postUser: boolean;
}) => {
  return (
    <s.Top>
      <h2>{title}</h2>
      {postUser && (
        <s.UserButton>
          <Button color="white">수정</Button>
          <Button>삭제</Button>
        </s.UserButton>
      )}
    </s.Top>
  );
};
