import { SWRConfig } from 'swr';
import { api } from '../apis/api';

interface SWRConfigContextProps {
  children: React.ReactNode;
}

const SWRConfigContext = ({ children }: SWRConfigContextProps) => {
  const fetcher = async (url: string) => {
    try {
      const response = await api(url).then((response) => response.data);
      return response;
    } catch (error) {
      console.error('error', error);
    }
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
