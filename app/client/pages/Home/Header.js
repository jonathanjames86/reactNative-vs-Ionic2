import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component{
  render(){
    const headerContainer = {width: "100vw",height: "75vh",backgroundColor: "#4D8DF6", display:"flex"};
    const headerText = {width: "50%", height: "65%", fontSize: "2rem",color: "#fff", textAlign: "center", paddingTop: "25vh"};
    const btn = {width: "10rem", height:"3rem", margin:"1rem",backgroundColor:"#fff", color:"#4D8DF6", border:"1px solid #fff", fontSize: "1.25rem"};
    const btn2 = {width: "10rem", height:"3rem", backgroundColor:"#4D8DF6", color:"#fff", border:"1px solid #fff", fontSize: "1rem"};
    const headerImage = {width:"50%", height:"100%", backgroundImage: "url('http://www.mobiloitte.com/blog/wp-content/uploads/2016/07/ionic-vs-react-native.png')", backgroundSize: "cover", backgroundPosition: "center"};
    const secText = {fontSize: "1rem", marginTop: "1rem", marginBottom:"2rem"};


    return(

        <div style={headerContainer}>
          <div style={headerText}>
            Ionic 2 and React Native
            <br />
            <div style={secText}>
              A two week out of the box experiment, resource and project
              <br />
               by and for JR Developers
              <br />
            </div>
              <Link to="data"><button className="a" style={btn}>My Project</button></Link>
              <Link to="resources"><button className="a" style={btn2}>Resources</button></Link>
        </div>
              <div style={headerImage}>
              </div>
      </div>


    );
  }
}
