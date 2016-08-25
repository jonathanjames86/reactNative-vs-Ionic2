import React from "react";
import { IndexLink,Link } from "react-router";

export default class Nav extends React.Component {
  render(){
    const navInfo = {
      backgroundColor: "hsla(0, 0%, 0%, 0.4)",
      width: "100vw",
      height: "7vh",
      display: "flex",
      position:"absolute",
      zIndex: "10"
    };
    const menuItems = {color:"white", fontSize:".85rem", textDecoration:"none", height:"100%", width: "8rem", display: "flex", justifyContent: "center", alignItems:"center"};
    return(
    <div>
      <div style={navInfo}>
        <div style={menuItems}>
          <IndexLink style={menuItems} to="/"> Home </IndexLink>
        </div>
        <div style={menuItems}>
        <Link style={menuItems} to="routing"> Routing </Link>
        </div>
        <div style={menuItems}>
        <Link style={menuItems} to="layout"> Layout </Link>
        </div>

      </div>
      {this.props.children}
    </div>
    );
  }


}
