import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section 
      id={id} 
      ref={elementRef}
      className={`py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;