import { useEffect, useState } from 'react';
import reactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  nodeName: string;
}

export const Portal = ({ children, nodeName }: PortalProps) => {
  const [node, setNode] = useState<Element | null>(null);

  useEffect(() => {
    const node = document.getElementById(nodeName) as Element;
    setNode(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setNode]);

  if (typeof window === 'undefined') {
    return null;
  }
  return node && reactDOM.createPortal(children, node);
};
