import { Button } from '@/common';
import { ChattingInput } from '../../components';
import * as s from './style';

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
