import * as s from './style';

export const Pagination = () => {
  return (
    <s.Pagination>
      <s.Icon type="doubleLeft" size={20} />
      <s.Icon type="left" size={10} />
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <s.Icon type="right" size={10} />
      <s.Icon type="doubleRight" size={20} />
    </s.Pagination>
  );
};
