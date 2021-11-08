import { Avatar,Divider } from '@material-ui/core'
import { Camera, ChildCareOutlined,ExitToAppOutlined, ComputerOutlined, EditAttributesOutlined, FavoriteBorder, ForwardOutlined, GamesOutlined, HdSharp, HealingOutlined, HelpOutlineRounded, HomeOutlined, LanguageOutlined, LocalMallOutlined, NotificationImportantOutlined, PartyModeOutlined, PhoneAndroidOutlined, Rotate90DegreesCcwOutlined, Settings, ShoppingBasketOutlined, ShoppingCartOutlined, Store, StoreMallDirectoryOutlined, WbIncandescent } from '@material-ui/icons'
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation,NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from './constants/actionTypes';
import './drawermenu.css'

function DraweeMenu() {
    // retrive user data

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const userDetails=JSON.parse(localStorage.getItem("user"))
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    console.log(user)
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
      
        history.push('/auth');
      
        setUser(null);
      };
      useEffect(() => {
        const token = user?.token;
      
        if (token) {
          const decodedToken = decode(token);
      
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
      
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
      



return (
<div className="drawer_main">
<div className="drawer_main_company">
<h2>FORECAST.Gh</h2>
<ShoppingCartOutlined/>
</div>
<div className="drawer_main_content">
<div className="drawer_main_header">
<p>MY ACCOUNT</p>
</div>
{userDetails?(
<div className="drawer_main_avatar">
{!userDetails.photoURL?(<Avatar src={userDetails?.email.charAt(0)}>{userDetails?.email.charAt(0)}</Avatar>):(<Avatar src={userDetails.photoURL}/>)}
{!userDetails.displayName?(<p>{userDetails?.email}</p>):(<p>{userDetails?.displayName}</p>)}
</div>):(<Link to="/profile"><p>Sign In</p></Link>)
}
<div className="drawer_main__children">
<NotificationImportantOutlined/>
<p>Notification</p>
</div>
<div className="drawer_main__children">
<Store/>
<p>Orders</p>
</div>
<div className="drawer_main__children">
<FavoriteBorder/>
<p>Saved Items</p>
</div>
</div>
<Divider/>
<div className="drawer_main_content">
<div className="drawer_main_header">
<p>OUR CATEGORIES</p>
</div>
<Link to="/phones">
<div className="drawer_main__children">
<PhoneAndroidOutlined/>
<p>Phones & Tablets</p>

</div>
</Link>
<Link to="/health">
<div className="drawer_main__children">
<HealingOutlined/>
<p>Healthy & BEAuty</p>
</div>
</Link>
<Link to="/education">
<div className="drawer_main__children">
<EditAttributesOutlined/>
<p>EDUCATION</p>
</div>
</Link>
<Link to="/baby">
<div className="drawer_main__children">
<ChildCareOutlined/>
<p>baby product</p>
</div>
</Link >
<Link to="/computers">
<div className="drawer_main__children">
<ComputerOutlined/>
<p>Computing</p>
</div>
</Link>
<Link to="/office">
<div className="drawer_main__children">
<HomeOutlined/>
<p>home & office</p>
</div>
</Link>
<Link to="/media">
<div className="drawer_main__children">
<Camera/>
<p>Media Devices</p>
</div>
</Link>
<Link to="/electronics">
<div className="drawer_main__children">
<WbIncandescent/>
<p>ELECTRONICS</p>
</div>
</Link>
<Link to="/bodyCare">
<div className="drawer_main__children">
<ForwardOutlined/>
<p>Food & body care</p>
</div>
</Link>
<Link to="/hardware">
<div className="drawer_main__children">
<Rotate90DegreesCcwOutlined/>
<p>Hardwares</p>
</div>
</Link>
</div>
<Divider/>
<div className="drawer_main_content">
<div className="drawer_main_header">
<p>OUR SERVICES</p>
</div>
<Link to="/warehouse">
<div className="drawer_main__children">
<PartyModeOutlined/>
<p>product warehouse</p>
</div>
</Link>
<Link to="/developers">
<div className="drawer_main__children">
<LanguageOutlined/>
<p>develop softwares</p>
</div>
</Link>
<Link to="/localmall">
<div className="drawer_main__children">
<LocalMallOutlined/>
<p>sell locally</p>
</div>
</Link>
<Link to="/food">
<div className="drawer_main__children">
<ForwardOutlined/>
<p>Food & deliveries</p>
</div>
</Link>
<Link to="/game">
<div className="drawer_main__children">
<GamesOutlined/>
<p>gaming</p>
</div>
</Link>
</div>

<Divider/>

<div className="drawer_main_content">
<div className="drawer_main_header">
<p>ME & YOU</p>
</div>
<Link to="/settings">
<div className="drawer_main__children">
<Settings/>
<p>Settings</p>
</div>
</Link>
<Link to="/help">
<div className="drawer_main__children">
<HelpOutlineRounded/>
<p>Help center</p>
</div>
</Link>

<div className="drawer_main__children">
<ShoppingBasketOutlined/>
{user?
(<Link to="/sell"><p>Sell Product</p></Link>):(<Link to="/account"><p>Create Selling Account</p></Link>)}
</div>

</div>
<Divider/>
{user?
(<div className="child">
    
<p>{user.result.name}</p>
<ExitToAppOutlined onClick={logout}/>
</div>):
(<div className="child">
<Link to="/auth">
<p>Sign In</p>
</Link>
</div>)}
</div>
)
}

export default DraweeMenu
