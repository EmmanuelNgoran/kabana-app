import React from 'react'
import "./SideBarOption.css"

function SideBarOption({Icon,title}) {
  return (
    <div className="sideBarOption">
        {Icon && <Icon className="sidebarOption__icon"/>}
        <h3 className="sidebarOption__title">{title}</h3>
    </div>
  )
}

export default SideBarOption