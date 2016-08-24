import React from "react";
import { Link } from "react-router";

export default class Routing extends React.Component {
  render(){
    return(
    <div>
      <div className="mainContainer">
          <h1>Routing</h1>
      </div>
      {this.props.children}
      <Link to="home">Home</Link>
    </div>
    );
  }


}
