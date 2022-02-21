import React, {useEffect} from "react";
import ROUTES from "./_routes";
import $ from "jquery"
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

$(document).ready(function(){
  var header = $('.menu-sticky');
  var win = $(window);

  win.on('scroll', function() {
     var scroll = win.scrollTop();
     if (scroll < 1) {
         header.removeClass("sticky");
     } else {
         header.addClass("sticky");
     }

      $("section").each(function() {
      var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
          if(scroll >= elementTop) {
              $(this).addClass('loaded');
          }
      });

  });
})
 
function App() {  
  return (
    <div className="defult-home"> 
     <div className="main-content">
     <Router>
        <Header />
        <Switch>
          {ROUTES.map((item, idx) => (
            <Route
              key={idx}
              path={item.path}
              exact
              component={item.component}
            />
          ))}
        </Switch>
        {<Footer />}
      </Router>
     </div>
    </div>
  );
}

export default App;
