import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen); 
     // it is a trick of reverting. for boolean type we want to change it when we click it then we simply use not operator. at start me make it false if we click on profile it become true pop down will open and again we click on profile icon then it become false and pop down will close.
  };

   // these are css style already written in index.css file we are just using them
  const menuClass = "menu";  
  const activeMenuClass = "menu selected";
 
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "25px" }} />  
      <div className="menus">
        <ul>
          <li>
              <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(1)} to="/">
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Dashboard</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(2)} to="/orders">
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Orders</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(3)} to="/holdings">
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Holdings</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(4)} to="/positions">
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Positions</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(5)} to="/funds">
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Funds</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} onClick={()=>handleMenuClick(6)} to="/apps">
                <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
             </Link>
          </li>
        </ul>

        <hr />
          
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;