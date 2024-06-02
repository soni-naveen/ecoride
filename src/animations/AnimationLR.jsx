import React, { useEffect } from "react";

function AnimateLR() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".reveallr");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 30;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("activelr");
        } else {
          reveals[i].classList.remove("activelr");
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

export default AnimateLR;
