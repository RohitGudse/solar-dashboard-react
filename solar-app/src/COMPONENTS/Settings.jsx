import React, { useState } from "react";

const Settings = () => {
  // ===========================
  // User Information
  // ===========================

  const [userInfo, setUserInfo] = useState({
    fullName: "Sarvesh Salkar",
    email: "sarvesh@example.com",
    phone: "+91 9876543210",
    language: "English",
    theme: "Light",
    notifications: true,
    darkMode: false,
    twoFactorAuth: false,
  });

  // ===========================
  // Handle Input Change
  // ===========================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ===========================
  // Toggle Switches
  // ===========================

  const handleToggle = (field) => {
    setUserInfo((prevData) => ({
      ...prevData,
      [field]: !prevData[field],
    }));
  };

  // ===========================
  // Save Settings
  // ===========================

  const saveSettings = () => {
    alert("Settings Saved Successfully!");

    console.log("Updated Settings:", userInfo);
  };

  // ===========================
  // Reset Settings
  // ===========================

  const resetSettings = () => {
    setUserInfo({
      fullName: "",
      email: "",
      phone: "",
      language: "English",
      theme: "Light",
      notifications: false,
      darkMode: false,
      twoFactorAuth: false,
    });
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.15)",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>⚙️ Account Settings</h1>

      <hr />

      {/* Profile Information */}

      <h2>Profile Details</h2>

      <label>Full Name</label>

      <input
        type="text"
        name="fullName"
        value={userInfo.fullName}
        onChange={handleInputChange}
        style={inputStyle}
      />

      <label>Email Address</label>

      <input
        type="email"
        name="email"
        value={userInfo.email}
        onChange={handleInputChange}
        style={inputStyle}
      />

      <label>Phone Number</label>

      <input
        type="text"
        name="phone"
        value={userInfo.phone}
        onChange={handleInputChange}
        style={inputStyle}
      />

      <hr />

      {/* Language */}

      <h2>Language</h2>

      <select
        name="language"
        value={userInfo.language}
        onChange={handleInputChange}
        style={inputStyle}
      >
        <option>English</option>
        <option>Hindi</option>
        <option>Marathi</option>
      </select>

      {/* Theme */}

      <h2>Theme</h2>

      <select
        name="theme"
        value={userInfo.theme}
        onChange={handleInputChange}
        style={inputStyle}
      >
        <option>Light</option>
        <option>Dark</option>
        <option>System Default</option>
      </select>

      <hr />

      {/* Preferences */}

      <h2>Preferences</h2>

      <div style={toggleContainer}>
        <span>Email Notifications</span>

        <input
          type="checkbox"
          checked={userInfo.notifications}
          onChange={() => handleToggle("notifications")}
        />
      </div>

      <div style={toggleContainer}>
        <span>Dark Mode</span>

        <input
          type="checkbox"
          checked={userInfo.darkMode}
          onChange={() => handleToggle("darkMode")}
        />
      </div>

      <div style={toggleContainer}>
        <span>Two Factor Authentication</span>

        <input
          type="checkbox"
          checked={userInfo.twoFactorAuth}
          onChange={() => handleToggle("twoFactorAuth")}
        />
      </div>

      <hr />

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "25px",
        }}
      >
        <button
          onClick={saveSettings}
          style={{
            padding: "12px 25px",
            cursor: "pointer",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Save Changes
        </button>

        <button
          onClick={resetSettings}
          style={{
            padding: "12px 25px",
            cursor: "pointer",
            background: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "15px",
};

const toggleContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

export default Settings;