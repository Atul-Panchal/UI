import React, { useState } from 'react';

function Sidebar() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        {/* <input placeholder='Search' type='search' /> */}
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
        <input type="text" placeholder="Search..."/>
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <a className="nav-link">PAC-MAN</a>
        {showText && <p>ETHICAL AI CONSULTANCY</p>}
      </li>
    </ul>
  );
}

export default Sidebar;
