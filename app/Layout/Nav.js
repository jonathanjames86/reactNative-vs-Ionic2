import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component {
  render(){
    return(
      <div>
        <h1>This will be the NAV</h1>
        {this.props.children}
      </div>
    );
  }


}
