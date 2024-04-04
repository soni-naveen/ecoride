import React, { useEffect } from "react";

function AnimateBU() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".revealbu");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("activebu");
        } else {
          reveals[i].classList.remove("activebu");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return <div>{/* Your JSX content here */}</div>;
}

export default AnimateBU;
