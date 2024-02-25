import React from 'react';
import './Header.css';
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineOutlined";

function Header() {
  return (
    <div className="header">
        <div className='header__left'>
            <Avatar
                  className="header__avatar"  
                  alt='Dev'
                  src=''
            />
      {/* Avatar for logged in user */}
      <AccessTimeIcon />
      {/* time icon */}
        </div>
    <div className="header__search">
      <SearchIcon />
        {/* search icon */}
        <input placeholder="Search Dev Programmer"/>
        {/* input */} 
    </div>
    <div className='header__right'>
      <HelpOutlineIcon />
    {/* help icon */}
    </div>
    </div>
  )
}

export default Header