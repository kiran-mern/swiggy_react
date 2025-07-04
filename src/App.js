import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter,Routes,Route ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      {/* <Body /> */}
    </div>
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
