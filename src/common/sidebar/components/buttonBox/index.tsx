import { Button } from '@/common';
import { useNavigateTo } from '@/hooks';
import { sweetAlert } from '@/utils/sweetAlert2';
import { useCallback } from 'react';
import * as s from './style';
export const ButtonBox = () => {
  const navigateTo = useNavigateTo();

  const hanlderEditButtonClick = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      return navigateTo('/edit');
    }
    sweetAlert('editPost').then((result) => {
      if (result.isConfirmed) {
        navigateTo('/login');
      }
    });
  }, [navigateTo]);

  return (
    <s.ButtonBox>
      <Button onClick={hanlderEditButtonClick}>게시글 작성</Button>
    </s.ButtonBox>
  );
};
