import React from "react";
import { IndexLink,Link } from "react-router";

export default class Nav extends React.Component {
  render(){
    const navInfo = {
      backgroundColor: "hsla(0, 0%, 0%, 0.3)",
      width: "100%",
      height: "3rem",
      display: "flex",
      justifyContent: "center",
      position:"absolute",
      zIndex: "10",

    };
    const menuItems = {color:"white", fontSize:"1.25rem", textDecoration:"none", height:"100%", width: "4rem", marginRight:"4rem", display: "flex", justifyContent: "center", alignItems:"center"};
    const headerImage = {height:"3rem", width:"75%", display:"flex", color:"#fff", fontSize:"1.25rem", alignItems:"center"};
    const navContainer = {height: "100%", width:"65%", margin:"auto",display:"flex", justifyContent:"space-between"}
    return(
    <div>
        <div style={navInfo}>
          <div style={navContainer}>
            <div style={headerImage}><img src={'https://cdn-images-1.medium.com/max/500/1*c42evQ2JXzdIJS9vs-5GsQ.png'} className="headerImg"/>I<sub className="sup">2</sub>&nbsp; vs RN</div>
              <div style={menuItems}>
                <IndexLink style={menuItems} to="/"> Home </IndexLink>
              </div>
              <div style={menuItems}>
              <Link style={menuItems} to="data"> Data </Link>
              </div>
              <div style={menuItems}>
              <Link style={menuItems} to="resources"> Resources </Link>
              </div>
            </div>
        </div>
      {this.props.children}
    </div>
    );
  }


}
