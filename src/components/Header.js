import React from 'react'
import { useState, useEffect } from 'react'
import "../css/header.css"
import gdrivelogo from "../glogo.png"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

function Header(props) {
    const[searchInput,setSearchInput] = useState("");
    const search =()=>{
        console.log(`search for ${searchInput} was made.`);
        setSearchInput("");
    }
    const handleSearchField = (e) => {
        setSearchInput(e.target.value);
    }
    return (
        <div className="header">
           
            <div className="header__logo">
            <img src={gdrivelogo} alt=""></img>
            <span>E-Drive </span>
            </div>
            <div className="header__search">
           <button onClick={search}><SearchIcon/></button>
            <input value = {searchInput} type="text" placeholder="search in drive" onChange={handleSearchField}/>
           <FormatAlignCenterIcon/>
            </div>
            <div className="header__icons">  
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>
                <span>
                    <AppsIcon/>
                    <Avatar src={props.photoURL}/>
                </span>
            </div>

        </div>
    )
}

export default Header
