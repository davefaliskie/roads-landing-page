import { useEffect } from 'react';

// This is needed because the phone_shadow class isn't always applies to images that take too long to load.
const useDropShadow = () => {
  useEffect(() => {
    const applyDropShadow = () => {
      const images = document.querySelectorAll('.phone_shadow');
      images.forEach(image => {
        image.onload = () => {
          image.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))';
        };
        if (image.complete) {
          image.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))';
        }
      });
    };

    applyDropShadow();

    // Reapply drop shadow on subsequent renders if needed
    window.addEventListener('load', applyDropShadow);

    return () => {
      window.removeEventListener('load', applyDropShadow);
    };
  }, []);
};

export default useDropShadow;
