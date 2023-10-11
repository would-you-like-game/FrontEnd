import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const PostItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  border: 1px solid ${Theme.colors.gray1};
  & > div:first-child {
    height: 120px;
    width: 120px;
    background-color: ${Theme.colors.gray1};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  & > span {
    display: flex;
    justify-content: end;
    color: ${Theme.colors.gray2};
  }
  & > p {
    font-size: ${Theme.fontSizes.body3};
  }
  & > div {
    display: flex;
    gap: 10px;
  }
`;