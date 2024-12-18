import React, { useState, useEffect } from "react";

const SvgImageSwitcher = () => {
  const images = [
    "touch-01.svg", // Default image when no key is pressed
    "touch-02.svg", // Image for key 'a'
    "touch-03.svg", // Image for key 's'
    "touch-04.svg", // Image for key 'd'
    "touch-05.svg", // Image for key 'f'
    "touch-06.svg", // Image for key 'g'
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  // Mapping of keys to image indices
  const keyImageMap = {
    a: 1,
    s: 2,
    d: 3,
    f: 4,
    g: 5,
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const imageIndex = keyImageMap[event.key];
      if (imageIndex !== undefined) {
        setCurrentImage(images[imageIndex]);
      }
    };

    const handleKeyUp = () => {
      setCurrentImage(images[0]); // Reset to default image
    };

    // Attach event listeners
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [images]);

  return (
    <div style={styles.container}>
      <img src={currentImage} alt="SVG Switcher" style={styles.image} />
    </div>
  );
};

export default SvgImageSwitcher;
