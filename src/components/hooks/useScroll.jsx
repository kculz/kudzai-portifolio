import { useCallback } from 'react';

const useScroll = () => {
  const scrollTo = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -80; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return { scrollTo };
};

export default useScroll;