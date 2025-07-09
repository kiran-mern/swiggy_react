import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Body from "../components/Body";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/user/Login";
import SignUp from "../components/user/Signup";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import Error from "../components/Error";
import { Provider } from "react-redux";
import UserContext from "../context/userContext";
import appStore from "../redux/appStore";
import { useEffect, useState } from "react";

function UserRouter() {

    const [loggedInUser,setLoggedInUser]=useState(null)

    useEffect(()=>{
        const storedUser=JSON.parse(localStorage.getItem("user"))
        if(storedUser){
            setLoggedInUser(storedUser)
        }
    },[])
  return (
    <Provider store={appStore}>
      <UserContext.Provider  value={{ loggedInUser, setLoggedInUser }}>
        <Header/>
        <Routes>
            <Route path='/' element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </Provider>
  );
}
export default UserRouter;
