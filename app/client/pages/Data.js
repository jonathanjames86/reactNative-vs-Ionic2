import React from "react";
import ReactPlayer from 'react-player';
import CHart from './chart';
var LineChart = require("react-chartjs").Line;


export default class Data extends React.Component {

  render(){
    const demoContainer = {width: "100%", height: "100%", color:"#fff", backgroundColor: "#31A3D9", display:"flex"};
    const videoDemo = {padding: "6rem", paddingLeft: "10rem",};
    const demoText = {paddingTop: "6rem", paddingRight: "10rem", paddingBottom: "6rem", width:"40%"};
    const dataTextTitle = {fontSize: "2rem", textAlign: "center", marginBottom:"1rem"}
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
          <div style={dataTextTitle}>So what about my experiment?</div>
          <p>Since I only had two weeks, I knew writing comprable apps in both React Native and Ionic 2 was quite a long shot. My apps just
          exercise some basic functionality. They both utilize the push/pop method of mobile development(swiping back to the previous page), animations, a Spotify API call,
          ListViews, and other stuff.</p>
          <p>Both apps were easy to set up. Following the offical docs for each framework. I had each one up and running in about a day and a half. From there I did find the
          Ionic 2 documentation much easier to follow. And working with Angular 2 made a lot more sense because of my background.  But even with that being said, I found
          the Android platform quite difficult to work with. And the more documentation I read, the quicker I realized that most of the components developed and information shared
           was geared towards IOS. After all React Native only became available This definitely made things interesting.
           <p> </p>
          </p>
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
