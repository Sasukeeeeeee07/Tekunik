import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endValue = parseFloat(end);
    countRef.current = count;

    const animateCount = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = t => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const nextCount = Math.floor(easedProgress * endValue);
      
      if (nextCount !== countRef.current) {
        setCount(nextCount);
        countRef.current = nextCount;
      }

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, isVisible]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter; 