import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import JobsPage from "./components/pages/JobPage"

import UserPage from "./components/pages/UserPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

import Header from "./components/subcomponents/Header";
import Footer from "./components/subcomponents/Footer";

import PrivateRoute from "./components/subcomponents/PrivateRoute";

import "./assets/css/default.min.css";
import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";

const App = ({ location, dispatch, history }) => (
    <div className="reactBody">
      <Header location={location} dispatch={dispatch} history={history}/>
      <div className='content'>
        <Route location={location} path="/" exact component={JobsPage}/>
        <Route location={location} path="/login" exact component={LoginPage}/>
        <Route location={location} path="/jobs" exact component={JobsPage}/>
        <PrivateRoute location={location} path="/user" component={UserPage}/>
        <Route location={location} path="/register" exact component={RegisterPage}/>
      </div>
      <Footer/>
    </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isAuth: !!state.auth.token,
    user: state.user,
});

export default connect(mapStateToProps)(App);
