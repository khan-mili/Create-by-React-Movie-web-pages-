import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Sohel&copy; 2024 MovieWebsite. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px 0",
};

export default Footer;
