import * as s from './style';
import { Button, Input } from '@/common';
import Select from '../../components/select';

export const EditRight = () => {
  return (
    <s.EditRight>
      <s.GameOption>
        <Input placeholder="인간수" type="number" />
        <Select />
      </s.GameOption>
      <Button>작성완료</Button>
    </s.EditRight>
  );
};
