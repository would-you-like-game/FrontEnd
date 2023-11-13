import { Icons } from '@/assets/icon';
import styled from '@emotion/styled';
type CarouselProps = {
  width: number;
};
export const Carousel = styled.div<CarouselProps>`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  min-width: 300px;
  width: ${(props) => props.width}px;
  height: fit-content;
  button {
    position: absolute;
    z-index: 2;
  }
  .plus {
    right: 0;
  }
  .minus {
    left: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled(Icons)`
  width: ${(props) => props.size}px;
  height: auto;
  cursor: pointer;
  position: absolute;
`;
