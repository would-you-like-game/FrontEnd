import Select from '../../components/select';
import * as s from './style';
import { Button, Input } from '@/common';
import { useRecoilInput } from '@/hooks/useRecoilInput';
import { editDataState } from '@/recoil/postState';

export const EditRight = () => {
  const [editData, onChange] = useRecoilInput(editDataState);
  return (
    <s.EditRight>
      <s.GameOption>
        <Input
          name="totalNumber"
          value={editData.totalNumber}
          onChange={(event) => onChange(event)}
          placeholder="인간수"
          type="number"
        />
        <Select />
      </s.GameOption>
      <input type="file" />
      <Button>작성완료</Button>
    </s.EditRight>
  );
};
