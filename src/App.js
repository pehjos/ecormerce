import React,{useEffect,useState} from 'react';
import Appbar from './Appbar'
import Buttons from './Buttons'
import BottomNav from './BotomNav'
import Carosel from './Carosel'
import {Hidden,Box,Avatar,List,Divider,IconButton} from '@material-ui/core'
import Product from './ProductHome'
import Browse from './Browse'
import Backtop from './Backtop'
import Footer from './Fotter'
import Notification from './Notification'
import Nearby from './Nearby'
import Basket from './Basket';
import Profile from './Profile'
import PostDeatils from './PostDetails';
import Phone from './Pages/Phone'
import Media from './Pages/Media'
import Computer from './Pages/Computer'
import Education from './Pages/Education'
import Game from './Pages/Game'
import Settings from './Pages/Setting'
import Software from './Pages/Software'
import Hardware from './Pages/Hardware'
import Help from './Pages/Help'
import Health from './Pages/Health'
import Localmall from './Pages/Localmall'
import Foods from './Pages/Foods'
import Office from './Pages/Office'
import Warehouse from './Pages/Warehouse'
import Electronic from './Pages/Electronic'
import Fooddelivery from './Pages/Fooddelivery'

import './App.css';
import Middle from './Middle';
import { getPosts } from './actions/posts';
import { getPostss } from './actions/cart';
import Video from './Video'
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import{BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import PostDetails from './PostDetails';
import Form from './Form'
import SellAccount from './SellAccount'
import Banner from './Banner'
import { useDispatch } from 'react-redux';
import Video1 from './Video1';
import CategoryPage from './CategoryPage';
function App() {
    const [{}, dispatch] = useStateValue();
// redux state for
const [currentId, setCurrentId] = useState(0);
const dispatchRed = useDispatch();


useEffect(() => {
  dispatchRed(getPosts());
}, [currentId, dispatchRed]);
const [currentId1, setCurrentId1] = useState(0);
const dispatchRed1 = useDispatch();


useEffect(() => {
  dispatchRed(getPostss());
}, [currentId1, dispatchRed1]);
    useEffect(() => {
      // will only run once when the app component loads...
  
      auth.onAuthStateChanged((authUser) => {
        console.log("THE USER IS >>> ", authUser);
  
        if (authUser) {
          // the user just logged in / the user was logged in
  
          dispatch({
            type: "SET_USER",
            user: authUser,
            
          });
          localStorage.setItem("user",JSON.stringify(authUser))
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
     
    }, []);
  
return (
<Router>

<div className="app_main">

<BottomNav/>
<Switch>
<Route path="/notification">
<Appbar/>
<Form currentId={currentId} setCurrentId={setCurrentId}/>
<Notification/>
</Route>
<Route path="/sell">

<Form currentId={currentId} setCurrentId={setCurrentId}/>

</Route>
<Route path="/account">

<SellAccount/>
</Route>
<Route path="/nearby">
<Appbar/>
<Nearby/>

</Route>
<Route path="/profile">
<Appbar/>
<Profile/>
</Route>
<Route path="/login">

<Profile/>
</Route>
<Route path="/basket">
<Appbar/>
<Basket/>
</Route>

<Route path="/phones">
<Phone/>

</Route>
<Route path="/media">

< Media/>
</Route>


<Route path="/health">
<Health/>
</Route>

<Route path="/warehouse">
<Warehouse/>

</Route>

<Route path="/office">

<Office/>
</Route>


<Route path="/help">

<Help/>
</Route>

<Route path="/software">

<Software/>
</Route>

<Route path="/hardware">

<Hardware/>
</Route>


<Route path="/game">

<Game/>

</Route>


<Route path="/setting">

<Settings/>
</Route>

<Route path="/localmall">

<Localmall/>
</Route>

<Route path="/education">

<Electronic/>
</Route>

<Route path="/posts/:id">
<Appbar/>
<PostDeatils/>
</Route>
<Route path="/computers">

<Computer/>
</Route>


<Route path="/foodelivery">
<Fooddelivery/>
</Route>

<Route path="/bodyCare">
<Foods/>
</Route>




<Route path="/">
<Appbar/>
<Buttons/>
<Hidden only={['lg','xl','md','sm']}>
<Carosel/>
    </Hidden>
    <Hidden mdDown>
    <Banner/>
    </Hidden>


<Middle/>
{/* <Hidden smUp>
  <Video />
</Hidden> */}

<Hidden smDown>
  <Video1 />
</Hidden>
<Backtop/>
<Product/>
<Browse/>
<Footer/>

{/* <Footer/> */}



</Route>

</Switch>
</div>
</Router>
);
}

export default App;
