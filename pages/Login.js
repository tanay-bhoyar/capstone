import React from 'react';
import '../styles/Login.css'; // Move this to the top as well

const Login = () => {
  return (
  <div class="login-container">
    <div class="image-container">
    <img src="https://events.vitap.ac.in/storage/01J0212R2ZR8A8K1QKWY4JXDKY.webp" alt="VIT-AP University"
        class="university-image"/>
      <h1 style={{color: 'white'}}>Welcome to Careers of VIT-AP University</h1>
      <p style={{color: 'white'}}>Where talent meets endless Possibilities</p>
    </div>
    <div class="form-container">
      <div class="login-box">
        <img
          src="data:image/png;base64,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"
          alt="VIT-AP University Logo" class="logo"></img>
        <h2>Login to apply for a Job</h2>
        <form id="loginForm">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" placeholder="Input your registered email" required></input>
          <button type="submit" id="generateOtp">Generate OTP</button>
        </form>
        <a href="careers-homepage.html" class="back-link">&larr; Back to careers homepage</a>
      </div>
    </div>
  </div>
  );
};

export default Login;