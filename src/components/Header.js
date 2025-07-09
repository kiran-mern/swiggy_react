import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { loggedInData } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const navigate=useNavigate()

  

  const handleLogout=()=>{
    localStorage.removeItem('user')
    navigate('/login')
  }
  

  const {loggedInUser}=useContext(UserContext)
  
const user=loggedInUser
  console.log(user,'anyone');
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems);
  

  const OnlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between bg-blue-50 shadow-lg ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className='flex p-4 m-4'>
          <li className="px-4">
            Status:{OnlineStatus ? "🟢" : "🔴" }
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to='/cart' > 🛒 {cartItems.length} </Link>
           
            </li>
          {/* <button
            className="login bg-white-100 "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button> */}
          {user ? (
                <li className="px-4 underline font-bold cursor-pointer"
                onClick={handleLogout}
                
                >👤{user.username}</li>)
                :<Link to={'/login'}>Login</Link> } 
         

        </ul>
      </div>
    </div>
  );
};

export default Header;
