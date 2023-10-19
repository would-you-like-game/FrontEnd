import Input from '@/common/input';
import * as s from './style';
import { Left, Right } from './view';

export const Edit = () => {
  return (
    <s.Edit>
      <Input placeholder="제목을 입력해주세요" />
      <s.Bottom>
        <Left />
        <Right />
      </s.Bottom>
    </s.Edit>
  );
};
