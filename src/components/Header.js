import React from 'react'
import "../css/header.css"
import gdrivelogo from "../glogo.png"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

function header(props) {
    return (
        <div className="header">
           
            <div className="header__logo">
            <img src={gdrivelogo} alt=""></img>
            <span>E-Drive </span>
            </div>
            <div className="header__search">
           <SearchIcon/>
            <input type="text" placeholder="search in drive"/>
           <FormatAlignCenterIcon/>
            </div>
            <div className="header__icons">  
                    <span id="HelpIcon">
                        <HelpOutlineIcon/>
                    </span>

                    <span id="SettingsIcon">
                        <SettingsIcon/>
                    </span>
                    
                    <span id="AppsIcon">
                        <AppsIcon/>
                    </span>
                    
                    <span id="Avatar">
                        <Avatar src={props.photoURL}/>
                    </span>
            </div>

        </div>
    )
}

export default header
