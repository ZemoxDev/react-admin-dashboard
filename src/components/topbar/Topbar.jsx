import React from 'react'
import "./topbar.css"

import {Language, NotificationsNone, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft"> 
                <span className="logo"> Dashboard </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                </div>
                <img src={require('../../mann.jpg')} alt="mann" className="topAvatar"/>
            </div>
        </div>
    </div>
  )
}
