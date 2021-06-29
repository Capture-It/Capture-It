import React, { Component } from 'react';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Home from './component/home/Home';






import MyPhoto from './component/myphoto/MyPhoto';
import Myfavourite from './component/myFav/Myfavourite';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Community from './component/community/Community';



export class App extends Component {



  render() {

    const {isAuthenticated }=this.props.auth0;


    return (
      <div>



        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />

            </Route>

            <Route path="/myphotos">
              {isAuthenticated ? <MyPhoto /> : ''}


            </Route>
            <Route path="/Community">
              <Community />


            </Route>
            
            <Route  path="/myfavourite">
           <Myfavourite />
              

            </Route>


            <br />
            <br />
            <br />

          </Switch>
        </Router>
        <Footer />


      </div>
    )
  }
}

export default withAuth0(App);
