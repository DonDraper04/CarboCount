import React, { useState, useRef, useEffect } from 'react';

const VerificationCodeInput = ({ onVerificationCodeChange }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    onVerificationCodeChange(verificationCode);
  }, [verificationCode, onVerificationCodeChange]);

  // Function to handle input change
  const handleInputChange = (index, value) => {
    // Update the verification code at the specified index
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode.join('')); // Concatenate all characters
    // Move focus to the next input field if available
    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to handle key press
  const handleKeyPress = (event, index) => {
    const key = event.key;
    // Allow only single character input and prevent non-numeric characters
    if (key.length === 1 && /^[0-9]$/.test(key)) {
      handleInputChange(index, key);
    }
  };

  // Function to handle backspace press
  const handleBackspace = (event, index) => {
    // If backspace is pressed and the input field is empty, move focus to the previous input field
    if (event.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Array to generate 5 input fields
  const inputs = Array.from({ length: 5 }, (_, index) => (
    <input
      key={index}
      ref={(ref) => (inputRefs.current[index] = ref)}
      type="text"
      maxLength={1}
      value={verificationCode[index] || ''}
      onChange={(e) => handleInputChange(index, e.target.value)}
      onKeyPress={(e) => handleKeyPress(e, index)}
      onKeyDown={(e) => handleBackspace(e, index)}
      style={{
        width: '2rem',
        height: '2rem',
        border: '1px solid black',
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'red',
        margin: '0.5rem',
        fontSize: '1.2rem',
      }}
    />
  ));

  return <div>{inputs}</div>;
};

export default VerificationCodeInput;
