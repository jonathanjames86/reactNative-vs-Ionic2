import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render(){
    const { location } = this.props;
    return(
    <div>
        <Nav location={location} />
      <div>
        <h1>Layout Is where I belong.</h1>
          {this.props.children}
        <Link to="routing">routing</Link>
      </div>
      <Footer/>
    </div>
    );
  }
}
