import { Button } from '@/common';
import * as s from './style';
import { ChattingInput } from '../../components';

export const ChattingBottom = () => {
  return (
    <s.chattingBottom>
      <ChattingInput />
      <Button borderColor="black2" color="black2">
        Send
      </Button>
    </s.chattingBottom>
  );
};
