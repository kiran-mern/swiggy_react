import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter,Routes,Route } from "react-router-dom";





               



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<AppLayout/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/> }/>
          <Route path="*" element={<Error/>}/>
        

      </Routes>
  
  </BrowserRouter>
)
