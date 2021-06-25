import React, { useState } from 'react';
import './NewsfeedConten.scss';
function NewsfeadContent() {
    return (
        <div id="page-contents">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 static">
                        <div className="profile-card">
                            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="user" className="profile-photo" />
                            <span className="infoUser">
                                <a href="#" className="text-white">
                                    Sarah Cruiz
                                </a>
                                <a href="#" className="text-white">
                                    <i className="ion ion-android-person-add"></i>
                                    1,299 followers
                                </a>
                            </span>
                        </div>
                        <ul className="nav-news-feed">
                            <li>
                                <i className="icon ion-ios-paper">
                                </i>
                                <div>
                                    <a href="https://themified.com/friend-finder/newsfeed.html">My Newsfeed</a>
                                </div>
                            </li>
                            <li>
                                <i className="icon ion-ios-people">
                                </i>
                                <div>
                                    <a href="https://themified.com/friend-finder/newsfeed-people-nearby.html">People Nearby</a>
                                </div>
                            </li>
                            <li>
                                <i className="icon ion-ios-people-outline">
                                </i>
                                <div>
                                    <a href="https://themified.com/friend-finder/newsfeed-friends.html">Friends</a>
                                </div>
                            </li>
                            <li>
                                <i className="icon ion-chatboxes">
                                </i>
                                <div>
                                    <a href="https://themified.com/friend-finder/newsfeed-messages.html">Messages</a>
                                </div>
                            </li>
                            <li>
                                <i className="icon ion-images">
                                </i>
                                <div>
                                    <a href="https://themified.com/friend-finder/newsfeed-images.html">Images</a>
                                </div>
                            </li>
                            <li>
                                <i className="icon ion-ios-videocam">
                                </i>
                                <div>
                                    <a href="https://themified.com/friend-finder/newsfeed-videos.html">Videos</a>
                                </div>
                            </li>
                        </ul>
                        <div className="chat-block">
                            <div className="title">Chat online</div>
                            <ul className="online-users list-inline">
                                <li>
                                    <a href="#" title="Linda Lohan">
                                        <img src="https://themified.com/friend-finder/images/users/user-2.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Sophia Lee">
                                        <img src="https://themified.com/friend-finder/images/users/user-3.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="John Doe">
                                        <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Alexis Clark">
                                        <img src="https://themified.com/friend-finder/images/users/user-5.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="James Carter">
                                        <img src="https://themified.com/friend-finder/images/users/user-6.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Robert Cook">
                                        <img src="https://themified.com/friend-finder/images/users/user-7.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Richard Bell">
                                        <img src="https://themified.com/friend-finder/images/users/user-8.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Anna Young">
                                        <img src="https://themified.com/friend-finder/images/users/user-9.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Julia Cox">
                                        <img src="https://themified.com/friend-finder/images/users/user-10.jpg" alt="user" className="img-responsive profile-photo" />
                                        <span className="online-dot"></span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default NewsfeadContent;