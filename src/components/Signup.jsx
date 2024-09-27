// src/components/Signup.jsx

import React, { useState } from "react";
import { Form, Button, Toast, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { name, email, password };

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setShowSuccess(true);
        setLoading(false);
        setTimeout(() => {
          navigate("/King-Sukh-Guest-House/login"); // Redirect to login after signup
        }, 1500);
      } else {
        const error = await response.json();
        setErrorMessage(error.message || "Signup failed. Try again.");
        setShowError(true);
        setLoading(false);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setErrorMessage("An error occurred. Please try again.");
      setShowError(true);
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mt-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

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
            {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
          </Button>

          <div className="form-footer mt-3">
            <p>
              Already have an account?{" "}
              <a href="/King-Sukh-Guest-House/login">Login</a>
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
        <Toast.Body>Signup successful! Redirecting to login...</Toast.Body>
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

export default Signup;
