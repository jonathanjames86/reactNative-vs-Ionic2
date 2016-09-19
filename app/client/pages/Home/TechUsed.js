import React from 'react';
import { Link } from 'react-router';


export default class TechUsed extends React.Component{
  render(){
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
    const techInfo = {width:"40%", height:"100%"};

    return(

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
                This is a great starting point. A sweet intro to understanding components. The official docs are on point! If you have experience with writing directives in Angular,
                the transition is not really that bad. Server-side rendering, Lighterweight, and a new component router. A huge upgrade from V.1
              </div>
            </div>
            <div style={techContainer}>
              <div style={techInfo}>
                <h2 style={techTitle}>ES6</h2>
                  Also known as ECMAScript 2015, this is latest standard of JavaScript. Following the same standards establish by
                  it's 2009 predessecor ES5, an easy-to-learn,  hard-to-master (I'm still discovering new features) transition packed with powerful new functionality.

              </div>
              <div style={techEs6}></div>
            </div>
            <div style={techContainer}>
              <div style={techWebP}></div>
              <div style={techInfo}>
                <h2 style={techTitle}>WebPack</h2>
                  Webpack is in essence a module bundler. Think of it as a Gulp, but specifically for large web apps. What the official doucmentation points out is for
                    big web apps "it’s not efficient to put all code into a single file, especially if some blocks of code are only required under some circumstances". So Webpack
                    simply compiles your code into "fragments" which fits better with modularization. This makes it optimal for running libraries like React.
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
                  The intial launch of Ionic in 2013 brought attention to hybrid mobile app development. With a robust set of tools and services, in 2015 Ionic developers created over 1.3M apps.
                  Ionic 2 (still in beta) brings all of that and more to the table. More native functionality, built on top of Angular 2 and Apache Cordova makes for an easy and powerful
                  development cycle. They have some of the best documentation I've seen. You'll be up and running in no time.
                </div>
            </div>
            <div style={techContainer}>
              <div style={techInfo}>
                <h2 style={techTitle}>Cordova/Android plugins</h2>
                  This popular framework makes mobile developing in HTML, CSS and JavaScript possible. Supported on all platforms, Apache Cordova has enabled more Developers
                  to enter the mobile market. Which means that the majority of code you write for one platform, will be compatible with the next. With out it, Ionic and React Native would not have been feasible.
              </div>
              <div style={techAndroid}></div>
            </div>
            <div style={techContainer}>
              <div style={techInative}></div>
              <div style={techInfo}>
                <h2 style={techTitle}>Ionic Native</h2>
                  Is a set of wrappers for Cordova plugins, that makes it even easier to access any native functionality on your mobile device like GeoLocation or the Camera. With Node.js installed
                  you really just need to run <br/> <code>npm install ionic --save</code> from the command line in your project directory. Easy as that!
                </div>
            </div>

          </div>


    )
  }
}
