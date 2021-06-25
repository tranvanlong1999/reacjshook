import React, { useState } from 'react';
import './Newsfeed.scss';
import NewsfeadContent from './NewsfeedContent.jsx';

function Newsfead() {
    return (
        <div>
            <nav className="nav-bar">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-logo" href="#">
                            <img src="https://themified.com/friend-finder/images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <form className="form-search">
                            <div className="form-group">
                                <i className="icon ion-android-search"></i>
                                <input type="text" placeholder="Search friends, photos, videos" className="form-control" />
                            </div>
                        </form>
                        <ul className="navbar-menu-ul">
                            <li className="navbar-menu-ul-li">
                                <a href="#">
                                    Home
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" />
                                    </span>
                                </a>
                            </li>
                            <li className="navbar-menu-ul-li">
                                <a href="#">
                                    Newsfeed
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" />
                                    </span>
                                </a>
                            </li>
                            <li className="navbar-menu-ul-li">
                                <a href="#">
                                    Timeline
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" />
                                    </span>
                                </a>
                            </li>
                            <li className="navbar-menu-ul-li">
                                <a href="#">
                                    All Pages
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" />
                                    </span>
                                </a>
                            </li>
                            <li className="navbar-menu-ul-li">
                                <a href="#">
                                    Contact
                                    <span>
                                        <img src="https://themified.com/friend-finder/images/down-arrow.png" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <NewsfeadContent></NewsfeadContent>
        </div>


    );
}

export default Newsfead;
