import React, { useState, useEffect, useRef } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startAnimation();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startAnimation = () => {
    const increment = target / 150;
    const updateCounter = () => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        return nextCount < target ? Math.round(nextCount) : target;
      });
    };

    const timer = setInterval(updateCounter, 10);

    return () => clearInterval(timer);
  };

  return (
    <div className="counter" ref={counterRef}>
      {count}+
    </div>
  );
};

export default Counter;
