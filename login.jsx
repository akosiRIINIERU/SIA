import React, { useState } from "react";
import "login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!username.trim()) {
      setUsernameError("Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      // do your login logic here, fam
      console.log("Logging in with:", { username, password });
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>SwiftCart Logistics</h1>
        <p>SALES & CUSTOMER MANAGEMENT</p>
        <i>Admin log-in</i>
      </div>

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="error-message">{usernameError}</div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error-message">{passwordError}</div>
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>

        <div className="register-link">
          Not an admin? Visit{" "}
          <a href="Customer-Service-and-Support-main/customer_login.html">
            Customer Service and Support
          </a>{" "}
          for customer related concerns.
        </div>
      </form>
    </div>
  );
}
