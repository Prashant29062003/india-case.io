import React, { useRef, useEffect, FC } from 'react';

interface ScrollAreaProps {
  children: React.ReactNode;
}

const ScrollArea: FC<ScrollAreaProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [children]);

  return (
    <div ref={scrollRef} className="scroll-area">
      {children}
    </div>
  );
};

export default ScrollArea;