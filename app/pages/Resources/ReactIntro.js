import React from 'react';
import { Link } from "react-router";

export default class ReactIntro extends React.Component{

  render(){
    const resourcesHead = {width:"100%", height:"25vh", backgroundColor: "#4D8DF6", display:"flex", alignItems:"center"};
    const resourceBody = {width:"65%", height:"100%", padding:"4rem", margin: "auto", backgroundColor:"#fff"};
    const  resourceTitle = {width:"100%", height:"5rem", display:"flex", alignItems:"center", fontSize:"3rem", marginBottom: ""};
    const resourceInfo = {fontSize: "1.75rem", width:"65%", margin:"auto", color:"#fff"};
    const imgSrc = {maxHeight:"5rem", maxWidth:"5rem"}
    const resourceText = {padding:"2rem", width:"85%", margin:'auto'}

    return(
      <div style={resourceBody}>
        <div style={resourceTitle}><img style={imgSrc} src={'https://cdn.auth0.com/blog/react-js/react.png'} className="img-responsive"/>React</div>
        <div style={resourceText}>Starting a React project can seem daunting. I'll take you through a simple setup process that should have you feeling s little less overwhelmed.  I'm just going to
          just assume this is your first React project and if you prefer you can go straight to this <a href="https://github.com/jonathanjames86/reactSite">site's repo</a>. <p> We'll start with setting up our
          basic project structure.</p>

          <p> Next we'll set up our WebPack. Let's first npm install webpack to our project. I would also recommend installing it globaly.
          <br/> <code> npm install --save webpack </code>
          <br/>

          </p>
          <br/>
        </div>
      </div>

    );
  }
}
