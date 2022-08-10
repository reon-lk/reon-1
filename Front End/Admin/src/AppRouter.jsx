import React, { Component } from "react";
import Aside from "./layout/Aside";
import Header from "./layout/Header";
import Dashboard from "./views/Dashboard";
import Hires from "./views/Hires";
import Pages from "./views/Pages";
import Page_settings from "./views/Page_settings";
import Profile from "./views/Profile";
import Users from "./views/Users";
import Vehicles from "./views/Vehicles";
import {Switch ,Route,Redirect}from './react-router-dom';
import Footer from "./layout/Footer";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Aside/>
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Hires" component={Hires} />
          <Route path="/Page_settings" component={Page_settings} />
          <Route path="/Pages" component={Pages} />
          <Route exact path="/Profiles" component={Profile} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Vehicles" component={Vehicles} />

          <Redirect to="/Dashboard" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default AppRouter;