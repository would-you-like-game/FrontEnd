import { Input } from '@/common';
import * as s from './style';
import { EditLeft, EditRight } from './view';
import { ContentArea } from '@/styles/GlobalStyle';
import { useRecoilInput } from '@/hooks/useRecoilInput';
import { editDataState } from '@/recoil/postState';
import { onSbumitPost } from '@/apis/post/api';
import { FormEvent } from 'react';

export const Edit = () => {
  const [editData, onChange] = useRecoilInput(editDataState);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSbumitPost(editData);
  };

  return (
    <s.Edit onSubmit={(e) => handleSubmit(e)}>
      <ContentArea>
        <Input
          value={editData.title}
          name="title"
          onChange={(evnet) => onChange(evnet)}
          placeholder="제목을 입력해주세요"
          type="text"
        />
        <s.Bottom>
          <EditLeft />
          <EditRight />
        </s.Bottom>
      </ContentArea>
    </s.Edit>
  );
};
