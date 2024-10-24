// components/Header.jsx
import React from 'react';
import { Menu, User } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-button" onClick={onMenuClick}>
          <Menu />
        </button>
        <div className="logo">
          <span className="brand-name">INTEGRICODE</span>
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button">
          <User />
        </button>
      </div>
    </header>
  );
};

export default Header;