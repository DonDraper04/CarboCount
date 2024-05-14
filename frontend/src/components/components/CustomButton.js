import React from 'react';

const CustomButton = ({
  width,
  height,
  bgColor,
  textColor,
  textSize,
  fontWeight,
  onClick, // Function to be executed when the button is clicked
  children
}) => {
  // Function to darken a given color
  const darkenColor = (color, amount) => {
    let col = color.slice(1); // Remove the '#' from the color string
    let num = parseInt(col, 16); // Convert hexadecimal to decimal
    let r = (num >> 16) + amount; // Shift the red channel by 'amount'
    let b = ((num >> 8) & 0x00FF) + amount; // Shift the blue channel by 'amount'
    let g = (num & 0x0000FF) + amount; // Shift the green channel by 'amount'
    // Ensure values stay within 0-255 range
    r = Math.min(Math.max(0, r), 255);
    g = Math.min(Math.max(0, g), 255);
    b = Math.min(Math.max(0, b), 255);
    // Convert back to hexadecimal and return the new color
    return "#" + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
  };

  // Calculate a darker shade for hover and active states
  const hoverColor = darkenColor(bgColor, -30); // Darken the color for hover effect

  // Inline styles for button
  const buttonStyles = {
    width: width,
    height: height,
    backgroundColor: bgColor,
    color: textColor,
    fontSize: textSize,
    fontWeight: fontWeight,
    transition: 'background-color 0.3s', // Smooth transition for background color change
  };

  // Inline styles for hover effect
  const hoverStyles = {
    backgroundColor: hoverColor,
  };

  const handleButtonClick = () => {
    if (onClick) {
      onClick(); // Call the specified onClick function when the button is clicked
    }
  };

  return (
    <button
      style={{ ...buttonStyles }}
      className="linear flex justify-center items-center rounded-3xl px-5 py-3 transition duration-200"
      data-ripple-light
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverColor} // Apply hover effect
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = bgColor} // Revert to original color
      onClick={handleButtonClick} // Call handleButtonClick when the button is clicked
    >
      {children}
    </button>
  );
};

export default CustomButton;
