import React from "react";
import { Link } from "react-router";


export default class Home extends React.Component {
  render(){
    const headerContainer = {
      width: "100vw",
      height: "65vh",
      backgroundColor: "#4686F0"
    };
    return(
    <div>
      <div style={headerContainer}>
        My Home
      
        <Link to="layout">Layout</Link>
      </div>
    </div>
    );
  }
}
