import { Button } from '@/common';
import * as s from './style';
import { ChattingInput } from '../../components';

export const ChattingBottom = ({
  msg,
  setMsg,
  onChangeMsg,
  onKeyDown,
  onSendMsg,
}) => {
  return (
    <s.chattingBottom>
      <ChattingInput
        value={msg}
        setMsg={setMsg}
        onChange={onChangeMsg}
        onKeyDown={onKeyDown}
      />
      <Button
        borderColor="black2"
        color="black2"
        onClick={() => {
          onSendMsg(msg);
        }}
      >
        Send
      </Button>
    </s.chattingBottom>
  );
};
