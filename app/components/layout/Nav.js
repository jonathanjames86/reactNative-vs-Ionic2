import React from "react";
import { IndexLink,Link } from "react-router";

export default class Nav extends React.Component {
  render(){
    const navInfo = {
      backgroundColor: "hsla(0, 0%, 0%, 0.4)",
      width: "100%",
      height: "7vh",
      display: "flex",
      justifyContent: "flex-end",
      position:"absolute",
      zIndex: "10"

    };
    const menuItems = {color:"white", fontSize:".85rem", textDecoration:"none", height:"100%", width: "4rem", marginRight:"4rem", display: "flex", justifyContent: "center", alignItems:"center"};
    return(
    <div>
      <div style={navInfo}>
        <div style={menuItems}>
          <IndexLink style={menuItems} to="/"> Home </IndexLink>
        </div>
        <div style={menuItems}>
        <Link style={menuItems} to="data"> Data </Link>
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
