import React, { useRef, useState } from 'react';

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
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="https://events.vitap.ac.in/storage/01J0212R2ZR8A8K1QKWY4JXDKY.webp"
          alt="University"
          style={styles.universityImage}
        />
        <div style={styles.welcomeText}>
          <h1>Welcome to Careers of VIT-AP University</h1>
          <p>Where talent meet endless Possibilities</p>
        </div>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.verificationBox}>
          <button style={styles.closeBtn} onClick={() => alert('Closed')}>✖</button>
          <h2>Enter verification code</h2>
          <p>We have just sent a verification code to saichar*****@mail.com</p>
          <form onSubmit={handleSubmit}>
            <div style={styles.codeInputs}>
              {code.map((num, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength="1"
                  value={num}
                  ref={(el) => (inputsRef.current[idx] = el)}
                  onChange={(e) => handleInputChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  style={styles.codeInput}
                />
              ))}
            </div>
            <a href="#" style={styles.resendCode}>Send the code again</a>
            <button type="submit" style={styles.verifyBtn}>Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
    },
    imageContainer: {
      flex: 1,
      position: 'relative',
    },
    universityImage: {
      width: '100%',
      height: '100vh',
      objectFit: 'cover',
    },
    welcomeText: {
      position: 'absolute',
      bottom: '30px',
      left: '30px',
      color: 'white',
      textShadow: '0px 4px 10px rgba(0, 0, 0, 0.8)',
    },
    formContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    verificationBox: {
      backgroundColor: 'white',
      padding: '40px',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      position: 'relative',
    },
    closeBtn: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    },
    codeInputs: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    codeInput: {
      width: '50px',
      height: '50px',
      textAlign: 'center',
      fontSize: '24px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      outline: 'none',
    },
    resendCode: {
      display: 'block',
      color: '#800000',
      fontSize: '12px',
      marginBottom: '20px',
      cursor: 'pointer',
    },
    verifyBtn: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#800000',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };
  

export default VerificationPage;