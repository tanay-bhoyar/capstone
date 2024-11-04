import React, { useRef, useState } from 'react';
import "../styles/verification.css";

const VerificationPage = () => {
  const [code, setCode] = useState(Array(5).fill(''));
  const inputsRef = useRef([]);

  // Handle keypress to move between inputs
  const handleInputChange = (e, idx) => {
    const { value } = e.target;
    if (value >= 0 && value <= 9 && value.length === 1) {
      let newCode = [...code];
      newCode[idx] = value;
      setCode(newCode);
      if (idx < 4) {
        inputsRef.current[idx + 1].focus();
      }
    }
  };

  // Handle backspace key
  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && code[idx] === '') {
      if (idx > 0) {
        inputsRef.current[idx - 1].focus();
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Verification code: ${code.join('')}`);
  };

  // Render the verification input boxes
  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://events.vitap.ac.in/storage/01J0212R2ZR8A8K1QKWY4JXDKY.webp"
          alt="University"
          className="university-image"
        />
        <div className="welcome-text">
          <h1>Welcome to Careers of VIT-AP University</h1>
          <p>Where talent meets endless Possibilities</p>
        </div>
      </div>

      <div className="form-container">
        <div className="verification-box">
          <button className="close-btn" onClick={() => alert('Closed')}>✖</button>
          <h2>Enter verification code</h2>
          <p>We have just sent a verification code to saichar*****@mail.com</p>
          <form onSubmit={handleSubmit}>
            <div className="code-inputs">
              {code.map((num, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength="1"
                  value={num}
                  ref={(el) => (inputsRef.current[idx] = el)}
                  onChange={(e) => handleInputChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="code-input"
                />
              ))}
            </div>
            <a href="#" className="resend-code">Send the code again</a>
            <button type="submit" className="verify-btn">Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
