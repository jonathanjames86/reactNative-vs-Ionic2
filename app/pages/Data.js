import React from "react";
import ReactPlayer from 'react-player';
import CHart from './chart';


export default class Data extends React.Component {

  render(){
    const demoContainer = {width: "100%", height: "100%", color:"#fff", backgroundColor: "#31A3D9", display:"flex"};
    const videoDemo = {padding: "6rem", margin:"auto"};
    const demoText = {padding: "6rem", width:"40%"};
    const d3ChartContainer = {width:"80%", height:"65vh", margin: "auto", marginTop:"6rem", marginBottom:"6rem", display:"flex", borderBottom:".85rem solid #31A3D9"};
    const myThoughts = {width:"80%", height:"65vh", margin:"auto"};
    const dataInfo = {width: "40%", height: "80%", padding: "2rem"};
    return(
    <div>
      <div className="mainContainer">

      </div>
      <div style={demoContainer}>
        <div style={videoDemo}>
          <ReactPlayer url='https://www.youtube.com/watch?v=juWhxCz1Wmg' playing />
        </div>
        <div style={demoText}>
          Here is your demo action so dont worry about the comparison
        </div>
      </div>
      <div style={d3ChartContainer}>
        <div style={dataInfo}>D3 and talk about what each framework is doing under the hood, go into minor details about
          what the graph is actually communicating in terms for the user and developer.
            <br/>
          How big of a difference
        </div>
        <div className="d3Chart">

        </div>

      </div>

      <div style={myThoughts}>
        What the data says to me. And my recommendations moving forward.
      </div>
    </div>
    );
  }


}
