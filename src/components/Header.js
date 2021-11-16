import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Header = () => {
  return (
    <div>
    <Link to="/">
      <h1 className="text-center text-warning mt-3 mb-4 header">Crypto Charts</h1>
      </Link>
    </div>
  );
};

export default Header;