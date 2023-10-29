import { Input } from '@/common';
import * as s from './style';
import { EditLeft, EditRight } from './view';
import { ContentArea } from '@/styles/GlobalStyle';

export const Edit = () => {
  return (
    <s.Edit>
      <ContentArea>
        <Input placeholder="제목을 입력해주세요" type="text" />
        <s.Bottom>
          <EditLeft />
          <EditRight />
        </s.Bottom>
      </ContentArea>
    </s.Edit>
  );
};
