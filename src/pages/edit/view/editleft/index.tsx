import * as s from './style';
import { editDataState } from '@/recoil/postState';
import { useRecoilInput } from '@/hooks/useRecoilInput';

export const EditLeft = () => {
  const [editData, onChange] = useRecoilInput(editDataState);

  return (
    <s.EditLeft>
      <div>0/500</div>
      <textarea
        value={editData.content}
        name="content"
        onChange={(event) => onChange(event)}
        placeholder="본문을 입력해주세요"
      ></textarea>
    </s.EditLeft>
  );
};
