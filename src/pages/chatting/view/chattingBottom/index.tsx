import { Button } from '@/common';
import * as s from './style';
import { ChattingInput } from '../../components';

export const ChattingBottom = ({
  msg,
  onChangeMsg,
  onKeyDown,
  onSendMsg,
}) => {
  return (
    <s.chattingBottom>
      <ChattingInput
        value={msg}
        onChange={onChangeMsg}
        onKeyDown={onKeyDown}
      />
      <Button borderColor="black2" color="black2" onClick={onSendMsg}>
        Send
      </Button>
    </s.chattingBottom>
  );
};
