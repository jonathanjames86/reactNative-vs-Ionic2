import React from "react";
import { IndexLink,Link } from "react-router";

export default class Nav extends React.Component {
  render(){
    const navInfo = {
      backgroundColor: "hsla(0, 0%, 0%, 0.5)",
      width: "100%",
      height: "3rem",
      display: "flex",
      justifyContent: "center",
      position:"absolute",
      zIndex: "10",
    };
    const menuItems = {color:"white", fontSize:"1.25rem", textDecoration:"none", height:"100%", width: "8rem", display: "flex", justifyContent: "center", alignItems:"center"};
    const headerImage = {filter:"blur", height:"3rem", width:"8rem", display:"flex", color:"#fff",  marginRight:"30rem", fontSize:"1.65rem", justifyContent:"center", alignItems:"center",  backgroundImage:"url('https://cdn-images-1.medium.com/max/500/1*c42evQ2JXzdIJS9vs-5GsQ.png')", backgroundColor: "hsla(0, 0%, 0%, 0.5)", backgroundBlendMode:"overlay", backgroundSize:"contain",backgroundRepeat:"no-repeat"};
    const navContainer = {height: "100%",  width:"65%", margin:"auto",display:"flex", justifyContent:"space-between"};
    return(
    <div>
        <div style={navInfo}>
          <div style={navContainer}>
            <div className="HeaderImage" style={headerImage}><div>I<sub className="sup">2</sub>&nbsp; vs RN</div></div>
              <div className="menuNav"  style={menuItems}>
                <IndexLink style={menuItems} activeClassName="activeMenu" to="/"> Home </IndexLink>
              </div>
              <div className="menuNav" style={menuItems}>
                <Link activeClassName="activeMenu" style={menuItems} to="data"> My Project </Link>
              </div>
              <div className="menuNav" style={menuItems}>
              <Link activeClassName="activeMenu" style={menuItems} to="resources/:"> Resources </Link>
              </div>
            </div>
        </div>
      {this.props.children}
    </div>
    );
  }


}
