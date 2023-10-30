import { Button, Modal, Portal } from '@/common';
import * as s from './style';
import { JoinUser, PostUser } from '../../components';
import { useModal } from '@/hooks/useModal';
type rightBottomProps = {
  postUser: boolean;
  category: string;
  number: string;
  nickname: string;
  profileImg: string;
  userId: number;
  temperature: number;
  participant: {
    nickname: string;
    profileImg: string;
    temperature: number;
    userId: number;
  }[];
};
const RightBottom = ({
  postUser,
  category,
  number,
  nickname,
  profileImg,
  userId,
  temperature,
  participant,
}: rightBottomProps) => {
  const { onModal, onClickHandler } = useModal();
  return (
    <s.RightBottom>
      <PostUser
        userId={userId}
        profileImg={profileImg}
        nickname={nickname}
        temperature={temperature}
      />
      <s.GameOptions>
        <Button color="white">인원수: {number}</Button>
        <Button>게임종류: {category}</Button>
      </s.GameOptions>
      <s.JoinUserZone>
        {postUser && <Button onClick={onClickHandler}>참가</Button>}
      </s.JoinUserZone>
      {onModal && (
        <Portal nodeName="joinUserModal">
          <Modal width={1000} heigth={1000} onClose={onClickHandler}>
            <s.JoinUser>
              {participant.map((el) => (
                <JoinUser
                  key={el.userId}
                  nickname={el.nickname}
                  profileImg={el.profileImg}
                  temperature={el.temperature}
                />
              ))}
            </s.JoinUser>
          </Modal>
        </Portal>
      )}
    </s.RightBottom>
  );
};

export default RightBottom;
