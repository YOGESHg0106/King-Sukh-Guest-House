// src/components/UserInfoDropdown.jsx

import React from "react";
import { Dropdown, Button } from "react-bootstrap"; // Import Button here
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const UserInfoDropdown = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {user ? (
        <Dropdown align="end" className="user-info" drop="up">
          <Dropdown.Toggle variant="outline-primary">
            <FaUserCircle size={24} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>Profile</Dropdown.Header>
            <Dropdown.ItemText>
              <strong>{user.name}</strong>
              <br />
              {user.email}
            </Dropdown.ItemText>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button variant="outline-primary" href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default UserInfoDropdown;
