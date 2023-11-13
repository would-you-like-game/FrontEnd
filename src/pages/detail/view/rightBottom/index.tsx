import React, { useCallback } from 'react';
import { Button } from '@/common';
import * as s from './style';
import { JoinUser, PostUser } from '../../components';
import { useModal } from '@/hooks/useModal';
import useSWR from 'swr';
import { handleJoinGame } from '@/apis/post/api';
import { Carousel } from '@/common/carousel';
import { Player } from '@/type/response';
const Portal = React.lazy(() =>
  import('@/common').then(({ Portal }) => ({ default: Portal }))
);
const Modal = React.lazy(() =>
  import('@/common').then(({ Modal }) => ({ default: Modal }))
);

const RightBottom = ({ postId }: { postId: number }) => {
  const { onModal, onToggleModal } = useModal();
  const { data: post } = useSWR(`post/${postId}`);
  const { data: participants, mutate } = useSWR<Player[]>(
    `post/player/${postId}`
  );
  const { totalNumber, category, postUser } = post;
  const handleJoinUserClick = useCallback(
    (postUser: boolean) => {
      postUser
        ? onToggleModal()
        : handleJoinGame(postId).then((response) => {
            if (response.status === 200) {
              mutate();
            }
          });
    },
    [onToggleModal, postId]
  );
  return (
    <s.RightBottom>
      <PostUser postId={postId} />
      <s.GameOptions>
        <Button color="white">인원수: {totalNumber}</Button>
        <Button>게임종류: {category}</Button>
      </s.GameOptions>
      <s.JoinUserZone>
        {participants && <Carousel itemList={participants} />}
        <Button onClick={() => handleJoinUserClick(postUser)}>
          {postUser ? '선택' : '참가'}
          {/* 참가 => 내가 신청했는지 여부 ? 참가 : 참가취소 */}
        </Button>
      </s.JoinUserZone>
      {onModal && (
        <Portal nodeName="joinUserModal">
          <Modal width={1000} heigth={1000} onClose={onToggleModal}>
            {participants &&
              participants.map((el) => (
                <JoinUser
                  key={el.joinPlayerId}
                  nickname={el.nickname}
                  profileImg={'profileImg'}
                  temperature={23}
                />
              ))}
          </Modal>
        </Portal>
      )}
    </s.RightBottom>
  );
};

export default RightBottom;
