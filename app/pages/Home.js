import React from "react";
import { Link } from "react-router";


export default class Home extends React.Component {
  render(){
    return(
    <div>
      <div>
        <h1>This is Where My Home Content Will Be!</h1>
        <Link to="layout">Layout</Link>
      </div>
    </div>
    );
  }
}
