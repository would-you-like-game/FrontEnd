import { Icons } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

interface InsideProprs {
  width: number;
  heigth: number;
}

export const Modal = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;
export const Outside = styled.div`
  position: absolute;
  display: flex;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Theme.colors.black1};
  opacity: 0.5;
`;
export const Inside = styled.div<InsideProprs>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.heigth}px;
  background-color: ${Theme.colors.white};
  border-radius: 20px;
  box-shadow: 10px 20px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

export const Icon = styled(Icons)`
  width: ${(props) => props.size}px;
  height: auto;
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;
