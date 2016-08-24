import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component {
  render(){
    return(
    <div>
      <div className="headerInfo">
          <h1>NAV/MENU</h1>
      </div>
      <h1>This will be the NAV</h1>
      {this.props.children}
    </div>
    );
  }


}
