import * as s from './style';
import { Button, Input } from '@/common';
import Select from '../../components/select';

export const Right = () => {
  return (
    <s.Right>
      <s.GameOption>
        <Input placeholder="인간수" type="number" />
        <Select />
      </s.GameOption>
      <Button>작성완료</Button>
    </s.Right>
  );
};

export default Right;
