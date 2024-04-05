import React from "react";

export default function Navbar() {
  const navbarStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    // borderBottom: "1px solid #ddd",
  };

  const brandContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoStyle = {
    width: "40px",
    marginRight: "10px",
  };

  const brandNameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <nav style={navbarStyle}>
        <div style={brandContainerStyle}>
          <img src="/logo.png" alt="Logo" style={logoStyle} />
          <span style={brandNameStyle}>URL-Shortener</span>
        </div>
      </nav>
    </div>
  );
}
