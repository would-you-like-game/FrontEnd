import * as s from './style';
import { ButtonBox } from './components/buttonBox';
import { CategoryBox } from './components/categoryBox';
import { useGetPathname } from '@/hooks';
export const Sidebar = () => {
  const pathname = useGetPathname();
  return (
    <>
      <s.Sidebar>
        <CategoryBox />
        {!(pathname[0] === 'chatting') && <ButtonBox />}
      </s.Sidebar>
    </>
  );
};
