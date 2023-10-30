import { SWRConfig } from 'swr';
import { api } from '../apis/api';

interface SWRConfigContextProps {
  children: React.ReactNode;
}

const SWRConfigContext = ({ children }: SWRConfigContextProps) => {
  const fetcher = async (url: string) => {
    const response = await api(url);
    return response;
  };
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRConfigContext;
