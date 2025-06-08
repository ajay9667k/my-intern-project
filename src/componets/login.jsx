import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import SignIn from './signin';
import "../App.css"

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}!`);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setPasswordChanged(true);
    setTimeout(() => {
      setShowForgot(false);
      setPasswordChanged(false);
      setNewPassword('');
      setConfirmPassword('');
    }, 2000);
  };

  return (
   
   // ...existing code...
    <div
      className="login-form-container"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      
      {!showSignUp && (
        <button
          type="button"
          className="signup-btn"
          style={{
            position: 'absolute',
            left: '50%',
            top: '90%',
            transform: 'translate(-50%, 0)',
            marginBottom: '20%',
            padding: '0.8rem 2.2rem',
            borderRadius: '1rem',
            border: 'none',
            background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '1px',
            boxShadow: '0 4px 24px #8b5cf655',
            cursor: 'pointer',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onClick={() => setShowSignUp(true)}
        >
          Sign Up
        </button>
      )}


      {showSignUp ? (
        <SignIn />
      ) : showForgot ? (
        <form className="login-form" onSubmit={handleForgotSubmit} autoComplete="off">
          <h2>Reset Password</h2>
          <div style={{ width: '100%' }}>
            <label htmlFor="new-password">New Password</label>
            <input
              id="new-password"
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowNewPassword(prev => !prev)}
              tabIndex={-1}
              aria-label="Toggle new password visibility"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div style={{ width: '100%' }}>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(prev => !prev)}
              tabIndex={-1}
              aria-label="Toggle confirm password visibility"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button type="submit">Change Password</button>
          {passwordChanged && (
            <div style={{ color: 'green', marginTop: '1rem' }}>
              Your password is changed
            </div>
          )}
        </form>
      ) : (
        <form className="login-form" onSubmit={handleLogin} autoComplete="off">
          <h2>Log In</h2>
          <p>Access your account securely</p>
          <div style={{ width: '100%' }}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="password-wrapper">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            {/* Password visibility toggle button removed as requested */}
          </div>
          <button
            type="button"
            className="forgot-link"
            onClick={() => setShowForgot(true)}
          >
            Forgot Password?
          </button>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}