import React from "react";
import { Link } from "react-router";


export default class Home extends React.Component {
  render(){
    const headerContainer = {
      width: "100vw",
      height: "75vh",
      backgroundColor: "#4D8DF6"
    };
    const forward = {
      width: '100vw',
      height: '50vh',
      backgroundColor: "#fff"
    }
    return(
    <div>
      <div style={headerContainer}>
        My Homies
        <Link to="layout">Layout</Link>
      </div>
      <div style={forward}>
        <div>
        </div>

      </div>

    </div>
    );
  }
}
