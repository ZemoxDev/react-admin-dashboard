import React from 'react'
import "./sidebar.css"

import {Home, LineStyle, LocalShipping, Message, Person, PhotoLibrary, PinDrop, Settings, Shop, ShoppingBasket, ShoppingCart, Timeline, TrendingUp, VerifiedUser} from '@material-ui/icons';
import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem">
                            <Home className="sidebarIcon"/>
                            Home
                        </li>
                    </Link>
                    <Link to="/media" className="link">
                        <li className="sidebarListItem">
                            <PhotoLibrary className="sidebarIcon"/>
                            Media
                        </li>
                    </Link>
                    <Link to="/posts" className="link">
                        <li className="sidebarListItem">
                            <PinDrop className="sidebarIcon"/>
                            Posts
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="sidebarMenu">
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            Users
                        </li>
                    </Link>
                    <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <ShoppingCart className="sidebarIcon"/>
                            Products
                        </li>
                    </Link>
                    <Link to="/messages" className="link">
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon"/>
                            Messages
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="sidebarMenu">
                <ul className="sidebarList">
                    <Link to="/analytics" className="link">
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                    </Link>
                    <Link to="/sales" className="link">
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </Link>
                    <Link to="/shipping" className="link">
                        <li className="sidebarListItem">
                            <LocalShipping className="sidebarIcon"/>
                            Shipping
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="sidebarMenu">
                <ul className="sidebarList">
                    <Link to="/settings" className="link">
                        <li className="sidebarListItem">
                            <Settings className="sidebarIcon"/>
                            Settings
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
