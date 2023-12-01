import { Camera } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const UploadButton = styled.input``;

export const Icons = styled(Camera)`
  position: absolute;
  width: 30px;
  height: auto;
  border: 1px solid black;
  border-radius: 100%;
  padding: 3px;
  background-color: ${Theme.colors.gray1};
`;
