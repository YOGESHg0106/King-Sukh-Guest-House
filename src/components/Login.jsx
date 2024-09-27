// src/components/Login.jsx

import React, { useState } from "react";
import { Form, Button, Toast, Spinner } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.result && result.token) {
          login(result.result, result.token); // Pass user data and token to login
          setShowSuccess(true);
          setLoading(false);
          setTimeout(() => {
            navigate("/King-Sukh-Guest-House/"); // Redirect to home after login
          }, 1500);
        } else {
          setErrorMessage("Invalid response from server.");
          setShowError(true);
          setLoading(false);
        }
      } else {
        const error = await response.json();
        setErrorMessage(error.message || "Invalid email or password");
        setShowError(true);
        setLoading(false);
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("An error occurred. Please try again.");
      setShowError(true);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="mt-3"
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Login"}
          </Button>

          <div className="form-footer mt-3">
            <p>
              Don't have an account?{" "}
              <a href="/King-Sukh-Guest-House/signup">Sign up</a>
            </p>
          </div>
        </Form>
      </div>

      {/* Success Toast */}
      <Toast
        onClose={() => setShowSuccess(false)}
        show={showSuccess}
        delay={3000}
        autohide
        className="toast-success"
      >
        <Toast.Body>Login successful! Redirecting...</Toast.Body>
      </Toast>

      {/* Error Toast */}
      <Toast
        onClose={() => setShowError(false)}
        show={showError}
        delay={3000}
        autohide
        className="toast-error"
      >
        <Toast.Body>{errorMessage}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Login;
