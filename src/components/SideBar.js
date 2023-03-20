import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import SideBarOption from "./SideBarOption";
import SettingsIcon from '@mui/icons-material/Settings';

import "./SideBar.css"

function Sidebar(){

    return (
        <div className="sideBar">
            <SideBarOption title="Home" Icon={HomeIcon}/>
            <SideBarOption title="Settings" Icon={SettingsIcon}/>
        </div>
    )
}

export default Sidebar;