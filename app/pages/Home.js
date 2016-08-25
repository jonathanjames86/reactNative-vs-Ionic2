import React from "react";
import { Link } from "react-router";


export default class Home extends React.Component {
  render(){
    const headerContainer = {width: "100vw",height: "75vh",backgroundColor: "#4D8DF6", display:"flex"};
    const headerText = {width: "50%", height: "65%", fontSize: "2rem",color: "#fff", textAlign: "center", paddingTop: "25vh"};
    const btn = {width: "10rem", height:"3rem", margin:"1rem",backgroundColor:"#fff", color:"#4D8DF6", border:"1px solid #fff", fontSize: "1.25rem"};
    const btn2 = {width: "10rem", height:"3rem", backgroundColor:"#4D8DF6", color:"#fff", border:"1px solid #fff", fontSize: "1rem"};
    const headerImage = {width:"50%", height:"100%", backgroundImage: "url('http://www.mobiloitte.com/blog/wp-content/uploads/2016/07/ionic-vs-react-native.png')", backgroundSize: "cover", backgroundPosition: "center"};
    const forward = {width: '70vw',height:'100%', margin: "auto", marginTop:"5rem", marginBottom:"6rem",backgroundColor: "#fff", display:"flex", borderBottom:".85rem solid #0F439B"};
    const avatarContainer = {width: "15%", height:"100%", display:"flex", flexWrap: "wrap", justifyContent: "center", marginRight: "2rem", marginTop: "1rem"};
    const avatar = { width: "7rem", height: "7rem", backgroundImage:"url('https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfNAAAAJDhjOTNjYjM2LWFhYmEtNGYzMC1hNWFiLWU3ODg3NGJhMzlkMQ.jpg')", backgroundSize: "cover", borderRadius: "50%"};
    const preface = {width: "75%", height:"100%", marginBottom:"5rem"};
    const secText = {fontSize: "1rem", marginTop: "1rem", marginBottom:"2rem"};
    const techUsed = {width: '55vw',height: '100%', margin: "auto"};
    const techHead = {textAlign: "center", marginBottom: "3rem", fontSize: "2rem"};
    const techP = {fontSize: "1rem"};
    const techContainer = {width: "100%", height: "15rem",display:"flex", color:"#858F9F", justifyContent: "space-between", marginBottom:"4rem"};
    const techTitle = {color: "#2b2b2b", fontWeight:"normal"};
    const techNg = {width:"40%", height:"100%", backgroundImage: "url('https://raw.githubusercontent.com/angular/angular.io/master/public/resources/images/logos/angular2/angular.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techTs = {width:"40%", height:"100%", backgroundImage: "url('http://wijmo.com/wp-content/uploads/2016/03/Typescript.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techRt = {width:"40%", height:"100%", backgroundImage: "url('https://cdn.auth0.com/blog/react-js/react.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techRn = {width:"40%", height:"100%", backgroundImage: "url('https://s3.amazonaws.com/media-p.slid.es/uploads/118447/images/1603781/reactNe.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techI2 = {width:"40%", height:"100%", backgroundImage: "url('http://ionic.io/img/2.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techAndroid = {width:"40%", height:"100%", backgroundImage: "url('http://images.locanto.in/1288390958/Introduction-to-Apache-Cordova_1.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techInative = {width:"40%", height:"100%", backgroundImage: "url('http://ionicframework.com/present-ionic/slides/img/native-icon.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techEs6 = {width:"40%", height:"100%", backgroundImage: "url('https://codereviewvideos.com/blog/wp-content/uploads/2016/04/es6-logo.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const techWebP = {width:"40%", height:"100%", backgroundImage: "url('https://s3.amazonaws.com/media-p.slid.es/uploads/20204/images/1644253/webpack.png')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"};
    const footerNav = {width: "100%", height:"25vh", backgroundColor:"#EBF0F6", display:"flex", alignItems:"center"};
    const footNavCont = {width:"50%", height:"60%", borderRight:"1px solid #858F9F"};
    const techInfo = {width:"40%", height:"100%"};
    return(
    <div>
      <div style={headerContainer}>
        <div style={headerText}>
          Ionic 2 and React Native
          <br />
          <div style={secText}>
            A two week out of the box experience, resource and project
            <br />
             by and for JR Developers
            <br />
          </div>
          <button style={btn}>The Data</button> <button style={btn2}>Resources</button>
        </div>
        <div style={headerImage}>
        </div>
      </div>
      <div style={forward}>
        <div style={avatarContainer}>
          <div style={avatar}></div>
          <br />
          By James Putnam
          <br />
        </div>
        <div style={preface}>
          <h2>Just a few things...</h2>
          <p>Hey there and welcome! I am incredibly excited to share with you my experience over the past weeks learning the Ionic 2 and React Native frameworks. Whether you stumbled
          upon this page out of curiosity, or looking to upgrade your skills and knowledge in JavaScript mobile development, know that the intention of this site is to save you time.</p>

          <p>With that being said there are a few items I wish to address. I still consider myself a JR level Developer. Even so, I believe the hard yards I have put in, and the information
          I have collected will make for a great starting point. I know because I was there! And because I am relativley new to the platform, my language will be straightforward
          and direct. All the modules you find in this project will be based off of my personal experience. I will dive deep into my development
          process with the Windows and Android platforms.(these frameworks work cross-platform) Languages, style-guides, and libraries studied. And the hours of docs I sorted through.</p>

          <p>Lastly, understand that Ionic 2 is still in beta and React Native has only been around a year or so. There is undoubtly a bright future for these frameworks. The more I learn, the more
          excited I get, and whatever future finds I discover to be helpful or advantageous will be shared here.</p>
          Enough Chat! How about we dive in? Starting with the languages and libraries we will be using in JavaScript Mobile Development.
        </div>
      </div>
      <div style={techUsed}>
        <div style={techHead}>
          TECH USED
          <br />
        <p style={techP}>A breakdown of the new languages I came across while working on this project. Check out the <Link to='resources'>resources</Link> page for more info</p>
        </div>

        <div style={techContainer}>
          <div style={techNg}></div>
          <div style={techInfo}>
            <h2 style={techTitle}>Angular 2</h2>
            This is a great starting point. A sweet intro to understanding components. The documentation is on point! If you have experience with Angular,
            the transition is not really that bad. Server-side rendering, Lighterweight, and a new component router. A huge upgrade from V.1
          </div>
        </div>
        <div style={techContainer}>
          <div style={techInfo}>
            <h2 style={techTitle}>Es6</h2>
            Now we are getting into things! React Native can run embedded instances of the JavaScriptCore inside a native mobile enviroment. It allows us to write mobile apps in pure JavaScript in React! It utilizes
            flexbox for layout, so there is no need to manually size your views in your app, which makes it easier to maintain and scale.
          </div>
          <div style={techEs6}></div>
        </div>
        <div style={techContainer}>
          <div style={techWebP}></div>
          <div style={techInfo}>
            <h2 style={techTitle}>WebPack</h2>
            This is a great starting point. A sweet intro to understanding components. The documentation is on point! If you have experience with Angular,
            the transition is not really that bad. Server-side rendering, Lighterweight, and a new component router. A huge upgrade from V.1
          </div>
        </div>
        <div style={techContainer}>
          <div style={techInfo}>
            <h2 style={techTitle}>TypeScript</h2>
            This is a huge language library that ecompasses all things JavaScript. Want to run the latest and greatest version of JavaScript? No problem. TypeScript will
            compile all the "new hotness" down to plain JavaScript for you. This library goes hand in hand with the Angular 2/Ionic 2 development cycle. For me is a must know.
          </div>
          <div style={techTs}></div>
        </div>
        <div style={techContainer}>
          <div style={techRt}></div>
          <div style={techInfo}>
            <h2 style={techTitle}>React</h2>
            Developed by Facebook. This is a JavaScript UI library that handles the View component in our Model-View-Controller software architecture. Written primarily in JSX, it forgoes the
             expensive approach of rebuilding the DOM on data changes. Instead it efficiently updates and renders the targeted components.
          </div>
        </div>
        <div style={techContainer}>
          <div style={techInfo}>
            <h2 style={techTitle}>React Native</h2>
            Now we are getting into things! React Native can run embedded instances of the JavaScriptCore inside a native mobile enviroment. It allows us to write mobile apps with pure JavaScript in React! It utilizes
            flexbox for layout, so there is no need to manually size your views in your app, which makes it easier to maintain and scale.
          </div>
          <div style={techRn}></div>
        </div>
        <div style={techContainer}>
          <div style={techI2}></div>
          <div style={techInfo}>
            <h2 style={techTitle}>Ionic 2</h2>

            </div>
        </div>
        <div style={techContainer}>
          <div style={techInfo}>
            <h2 style={techTitle}>Cordova/Android plugins</h2>
            Now we are getting into things! React Native can run embedded instances of the JavaScriptCore inside a native mobile enviroment. It allows us to write mobile apps in pure JavaScript in React! It utilizes
            flexbox for layout, so there is no need to manually size your views in your app, which makes it easier to maintain and scale.
          </div>
          <div style={techAndroid}></div>
        </div>
        <div style={techContainer}>
          <div style={techInative}></div>
          <div style={techInfo}>
            <h2 style={techTitle}>Ionic Native</h2>

            </div>
        </div>

      </div>
      <div style={footerNav}>
        <div style={footNavCont}></div>
        <div></div>

      </div>

    </div>
    );
  }
}
