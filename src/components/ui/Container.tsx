import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(`w-full mx-auto max-w-[1230px] place-content-center px-[20px]`, className)}
    >
      {children}
    </div>
  );
};

export default Container;
