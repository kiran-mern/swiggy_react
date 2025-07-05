import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter,Routes,Route ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";



const AppLayout = () => {
  const[name,setName]=useState()

  useEffect(()=>{

    const data={
      name:'kiran'
    }
    setName(data.name)
  },[])

  return (
    <UserContext.Provider value={{loggedInUser:name, setName}}>
          <div className="app">
      <Header />
      <Outlet/>
      {/* <Body /> */}
    </div>
    
  </UserContext.Provider>

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
            <Route path="*" element={<Error/>}/>

         </Route>

      </Routes>
  
  </BrowserRouter>
)
