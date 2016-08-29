import React from "react";
import { Link } from "react-router";
import ReactIntro from './ReactIntro';
import ReactNative from './ReactNative';
import Angular2 from './Angular2Intro';
import Ionic2 from './Ionic2';

export default class Resources extends React.Component{

  render(){
    const resourcesHead = {width:"100%", height:"25vh", backgroundColor: "#4D8DF6", display:"flex", alignItems:"center"};
    const resourceBody = {width:"65%", height:"45vh", padding:"4rem", margin: "auto", backgroundColor:"#fff"};
    const  resourceTitle = {width:"100%", height:"5rem", display:"flex", alignItems:"center", fontSize:"3rem", marginBottom: ""};
    const resourceInfo = {fontSize: "1.75rem", width:"65%", margin:"auto", color:"#fff"};
    const headerText = {fontSize:"1.25rem", color:"#9DC1F6"};
    const resourceText = {padding:"2rem", width:"85%", margin:'auto'}
    const imgSrc = {maxHeight:"5rem", maxWidth:"5rem"}
    return(
      <div>
        <div style={resourcesHead}>
          <div style={resourceInfo}>
            Resources
              <div style={headerText}>An overview of my project and the docs that were most helpful.
                <br/>Feel free to checkout out the code <Link to="resources">Here</Link>
               </div>
                <code>   </code>

          </div>
        </div>

        <ReactIntro />

        <ReactNative />

        <Angular2 />

        <Ionic2 />

      </div>
    );


  }



}
