import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Login from "./components/user/Login";
import { BrowserRouter,Routes,Route ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import SignUp from "./components/user/Signup";



const AppLayout = () => {
  const[loggedInUser,setLoggedInUser]=useState(null)

  useEffect(()=>{
    const storedUser=JSON.parse(localStorage.getItem('user'))
    if(storedUser){
      setLoggedInUser(storedUser)
    }

   
  },[])
  

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
          <div className="app">
      <Header />
      <Outlet/>
      {/* <Body /> */}
    </div>
    
  </UserContext.Provider>
    </Provider>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  
      <Routes>
          <Route path="/" element={<AppLayout/>} >
             <Route index element={<Body/>}/>
            <Route  path='/about'  element={<About/>} />
            <Route path='/contact' element={<Contact/> }/>
            <Route path='/restaurant/:resId' element={<RestaurantMenu/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path="*" element={<Error/>}/>

         </Route>

      </Routes>
  
  </BrowserRouter>
)
