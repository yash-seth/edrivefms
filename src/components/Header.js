import React from 'react'
import { useState } from 'react'
import "../css/header.css"
import gdrivelogo from "../glogo.png"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Header(props) {
    const[searchInput,setSearchInput] = useState("");
    const search =()=>{
        console.log(`search for ${searchInput} was made.`);
        if(searchInput!=="") {
        props.setsearchState(true);
        props.setsearchValue(searchInput);
        }
    }

    const clearSearch=() =>{
        setSearchInput("");
        props.setsearchState(false);
    }

    const handleSearchField = (e) => {
        setSearchInput(e.target.value);
    }
    return (
        <>
        <div class="banner">
            <div class="banner__content">
                <div class="banner__text">
                    <strong>Note:</strong> The backend has been temporarily disabled for demo purposes.
                </div>
            </div>
        </div>
        <div className="header">
           
            <div className="header__logo">
            <img src={gdrivelogo} alt=""></img>
            <span>E-Drive </span>
            </div>
            <div className="header__search">
           <button onClick={search}><SearchIcon/></button>
            <input value = {searchInput} type="text" placeholder="search in drive" onChange={handleSearchField}/>
            {(searchInput==="")?null:<button onClick={clearSearch}><CloseIcon/></button>}
           <FormatAlignCenterIcon className="AlignIcon"/>
            </div>
            <div className="header__icons">  
                <span>
                    <HelpOutlineIcon/>
                </span>
                <span id="SettingsIcon">
                    <SettingsIcon/>
                </span>
                <span>
                    <AppsIcon/>
                </span>
                <span>
                    <Avatar src={props.photoURL}/>
                </span>
            </div>

        </div>
        </>
    )
}

export default Header
