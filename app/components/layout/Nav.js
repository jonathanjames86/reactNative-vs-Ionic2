import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component {
  render(){
    const navInfo = {
      backgroundColor: "#4686F0",
      width: "100vw",
      height: "10vh"
    };
    return(
    <div>
      <div style={navInfo}>
          HOME/DATA/RESOURCES
      </div>
      {this.props.children}
    </div>
    );
  }


}
