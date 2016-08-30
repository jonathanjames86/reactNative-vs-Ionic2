# reactSite
Let's get started

Starting a React project can seem daunting. I'll take you through a simple setup process drawing basic connections that should have you feeling a little less overwhelmed. I'm going to assume this is your first React project, I will however assume you have some sort of JavaScript background , but if you prefer you can go straight to this site's repo and check my notes. Also as a side note I'll be using AirBNB's style guide.
We'll start with setting up our basic project structure.



Webpack Setup

Next we'll set up our WebPack. Let's first npm install webpack to our project and also globaly if you haven't yet.
npm install --save webpack 
npm install -g webpack

Linking our app to your HTML

In your root app folder at the top of your app.js we need to add the following code:
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Link } from "react-router";
Now let's draw some connections. Instead of requiring outside modules we can simply import them to have access to their functionality. So in this case we are grabbing these modules we've and all the goodness that comes with them in three simple lines. The 'ReactDOM' serves as the entry point of the DOM-related rendering paths, while we import 'React' to gain access to the React library and to eliminate the need of a JSX transformer. We will discuss 'React Router' in the next section.
Now that we've imported these modules we can make our app by adding:
var App = React.createClass({
 render(){
  return()
  }
})
below our imported modules. Inside each React class we want to have both a render and return function.
All of our html will go right inside of our return function.
Lastly to complete the link we will add our ReactDom.render method to connect our app.js with our index.html. We do this like so:
ReactDOM.render(<App />, document.getElementById('app')); 
Basically what's going on here is we are rendering our app into the DOM. To access and point our code in the right direction we use basic javascript to grab the id we assigned to our <div> in our HTML, in this case 'app'.
Done!
React Router: Making a single page application

Remember that 'react-router' we imported? It's about to blow your mind! To get this baby running we'll need to change our code a litte in our app.js, specifically our ReactDOM.render function. I'll give you the code then a little explanation:
ReactDOM.render( 
  <Router >
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="page1" component={Data}></Route>
      <Route path="page2" component={Home}></Route>
      <Route path="homePage" component={HomePage}></Route>
    </Route>
  </Router>,
document.getElementById('main'));
The Last line should seem familiar. All we have done here is switch out our <App /> element for our Router element. Within the Router element we place our Routes. In the first route or 'parent route' we place our container Component, in this case the 'Layout' component along with the path '/'. Right below that we set the default page in our application with a self closing </IndexRoute>. Below that we list all our routes with their corresponding path.
Important! Pay close attention to what's happening here <Route path="homePage" component={HomePage}></Route>. The path is similar to the component but the 'h' is lowercased. We do not want to have the possibility of duplicates within any of our components. Just a heads up for best practice.
At this point we can delete our 'var APP' decloration since it no longer exists in our ReactDOM.render method. So our app.js file will now look like:
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Link } from "react-router";
ReactDOM.render( 
  <Router >
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="page1" component={Data}></Route>
      <Route path="page2" component={Home}></Route>
      <Route path="homePage" component={HomePage}></Route>
    </Route>
  </Router>,
document.getElementById('main'));

We'll come back to our app.js shortly. Let's create a new folder called pages. Inside let's add a file 'Layout.js'. In this file we'll import both 'React' and 'react-router' after which we will then export this component so we can have access to it in our app.js. Your code should end up looking something like this: 
import React from "react";
import { Link } from "react-router";
export default class Layout extends React.Component {
  render(){
  const { location } = this.props;
   return(
    <div>
     {this.props.children}
    </div>
  );
  }
}
Here we are 'extending' our base Component 'app' by exporting our class 'Layout' as a React.Component.
    ^Read that one more time.^


We are essentially creating a branch in our component tree. And you're propbably thinking to yourself that's great and all James but what the heck is all that this.props nonsense?! Patience we're getting there!
Well 'props' is one of 3 ways we handle data in React. The two stable choices here are 'props' and 'state'. State is available through 'this.state' and is used when a component has an internal value that only effects that specific component. Props on the other hand can be injected into other components. So here we call the 'this.props.children' in order to have access to the children of our parent Route. Remember <Route path="/" component={Layout}>?


Let's head back to our app.js and complete the connection by adding the line:
import Layout from "./pages/Layout";
right below the rest of imports. React is smart enough to know it's looking for a .js file, so we don't need to specify the file type just the path.
In-Line Styling
