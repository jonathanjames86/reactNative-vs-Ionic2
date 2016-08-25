import React from "react";

export default class Resources extends React.Component{

  render(){
    const resourcesHead = {width:"100%", height:"25vh", backgroundColor: "#4D8DF6", display:"flex", alignItems:"center"};
    const resourceBody = {width:"65%", height:"45vh", padding:"4rem", margin: "auto", backgroundColor:"#fff"};
    const  resourceTitle = {width:"100%", height:"7rem", display:"flex", alignItems:"center", fontSize:"3rem", marginBottom: ""};
    const resourceInfo = {fontSize: "1.75rem", width:"65%", margin:"auto", color:"#fff"};
    const headerText = {fontSize:"1.25rem", color:"#9DC1F6"};
    return(
      <div>
        <div style={resourcesHead}>
          <div style={resourceInfo}>
            Resources
              <div style={headerText}>An overview of my project and the docs that were most helpful. </div>


          </div>
        </div>
        <div style={resourceBody}>
          <div style={resourceTitle}><img src={'https://cdn.auth0.com/blog/react-js/react.png'} className="img-responsive"/>React</div>
        </div>
        <div style={resourceBody}>
          <div style={resourceTitle}><img src={'https://s3.amazonaws.com/media-p.slid.es/uploads/118447/images/1603781/reactNe.png'} className="img-responsive"/>React Native</div>
        </div>
        <div style={resourceBody}>
          <div style={resourceTitle}><img src={'http://ionic.io/img/2.png'} className="img-responsive"/>Ionic2</div>
        </div>
        <div style={resourceBody}>
          <div style={resourceTitle}><img src={'https://raw.githubusercontent.com/angular/angular.io/master/public/resources/images/logos/angular2/angular.png'} className="img-responsive"/>Angular2</div>
        </div>
      </div>
    );


  }



}
