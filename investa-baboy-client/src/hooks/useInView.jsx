import { useState, useEffect, useRef } from 'react';

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // only animate once
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px', // 👈 adjust this to control trigger distance
        ...options,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
};

export default useInView;
