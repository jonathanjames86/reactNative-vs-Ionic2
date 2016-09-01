import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";

export default class ReactIntro extends React.Component{

  render(){
    const resourcesHead = {width:"100%", height:"25vh", backgroundColor: "#4D8DF6", display:"flex", alignItems:"center"};
    const resourceBody = {width:"65%", height:"100%", padding:"4rem", margin: "auto", backgroundColor:"#fff"};
    const  resourceTitle = {width:"100%", height:"5rem", display:"flex",alignItems:"center", fontSize:"3rem", marginBottom: "1rem"};
    const resourceInfo = {fontSize: "1.75rem", width:"65%", margin:"auto", color:"#fff"};
    const imgSrc = {maxHeight:"5rem", maxWidth:"5rem"};
    const code = {backgroundColor:"#4D8DF6", color:"#fff", fontSize:"1.25rem"};
    const resourceText = {paddingRight:"2rem", paddingBottom:"2rem", paddingLeft:"2rem", paddingTop:".5rem", width:"85%", height:"100%", margin:'auto', marginBottom:"1rem", backgroundColor:"#EBF0F6"};

    return(
      <div style={resourceBody}>
        <div style={resourceTitle}><img style={imgSrc} src={'https://cdn.auth0.com/blog/react-js/react.png'} className="img-responsive"/>React</div>
        <div style={resourceText}>
        <h3>Let's get started</h3>
        Starting a React project can seem daunting. I'll take you through a simple setup process drawing basic connections that should have you feeling a little less overwhelmed.  I'm going to
          assume this is your first React project, I will however also assume you have some sort of JavaScript background , but if you prefer you can go straight to this <a href="https://github.com/jonathanjames86/reactSite">site's repo</a> and check my notes, go for it.
          Also as a side note I'll be referencing <a href="https://github.com/airbnb/javascript/tree/master/react">AirBNB's</a> style guide.
          <p> We'll start with setting up our
          basic project structure.</p>
        We'll be covering basics only here so our project structe will reflect that.
          <p>Recommended Docs: <a href="https://reactjsnews.com/structuring-react-projects">Project Structure</a>,
          <a href="https://www.youtube.com/watch?v=MhkGQAoc7bc&index=1&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b">Set-up Tutorial</a>,
          <a href="https://facebook.github.io/react/docs/getting-started.html">Official Docs</a>
          </p>
        </div>
        <div style={resourceText}>
          <h3>Webpack Setup</h3>
          <p> Next we'll set up our WebPack. Let's first npm install webpack to our project and also globaly if you haven't yet.
             <br/><code style={code}> npm install -g webpack </code> (globaly)
          <br/> <code style={code}> npm install --save webpack </code> (saving to our project)

          </p>
        </div>
        <div style={resourceText}>
          <h3>Linking our app to your HTML</h3>
              In your root app folder at the top of your app.js we need to add the following code:
              <br/>
              <code style={code}>
                //top of app.js
                <br/>
              import React from "react";<br/>
              import ReactDOM from "react-dom";<br/>
              import &#123; Router, Route, IndexRoute, Link &#125; from "react-router";<br/>
              </code>
              Now let's draw some connections. Instead of requiring outside modules we can simply import them to have access to their
              functionality. So in this case we are grabbing these modules and all the goodness that comes with them in three simple lines.
              The 'ReactDOM' serves as the entry point of the DOM-related rendering paths, while we import 'React' to gain access to the React library
              and to eliminate the need of a JSX transformer.
              We will discuss 'React Router' in the next section.
              <p>
              Now that we've imported these modules we can make our app by adding:
              <br/><code style={code}>
                //middle of app.js
                <br/>
                var App = React.createClass(&#123;
                <br/>&nbsp;render&#40;&#41;&#123;<br/>
                &nbsp;&nbsp;return&#40;&#60;h1&#62; I AM the one who knocks! &#60;/h1&#62;&#41;<br/>
                  &nbsp;  &#125;<br/>
              &#125;)</code><br/>

              below our imported modules. Inside each React class we want to have both a render and return function.<br/>
              All of our html will go right inside of our return function.
              </p>
              <p>Lastly to complete the link we will add our ReactDom.render method to connect our app.js with our index.html.
              We do this like so:<br/>
              <code style={code}>
              //bottom of app.js
              <br/>
              ReactDOM.render&#40;&#60;App /&#62;, document.getElementById&#40;'app'&#41;&#41;;
              </code> <br/>
              Basically what's going on here is we are rendering our app into the DOM. To access and point our code in the right direction we use
              basic javascript to grab the id we assigned to our &#60;div&#62; in our HTML, in this case 'app'.
               <br/>Done!
              </p>

        </div>
        <div style={resourceText}>
          <h3>React Router: Making a single page application</h3>
            Remember that 'react-router' we imported? It's about to blow your mind! To get this baby running we'll need to change our
            code a litte in our app.js, specifically our ReactDOM.render function. I'll give you the code then a little explanation:
            <br/>
            <code style={code}>
            //app.js
            <br/>
                ReactDOM.render( <br/>
                &nbsp; &#60;Router &#62;<br/>
                  &nbsp; &nbsp;    &#60;Route path="/" component=&#123;Layout&#125;&#62;<br/>
                    &nbsp; &nbsp; &nbsp;     &#60;IndexRoute component=&#123;HomePage&#125;&#62;&#60;/IndexRoute&#62;<br/>
                    &nbsp; &nbsp;  &nbsp;    &#60;Route path="page1" component=&#123;Data&#125;&#62;&#60;/Route&#62;<br/>
                      &nbsp; &nbsp; &nbsp;   &#60;Route path="page2" component=&#123;Home&#125;&#62;&#60;/Route&#62;<br/>
                      &nbsp; &nbsp; &nbsp;   &#60;Route path="homePage" component=&#123;HomePage&#125;&#62;&#60;/Route&#62;<br/>
                  &nbsp; &nbsp;  &#60;/Route&#62;<br/>
              &nbsp; &#60;/Router&#62;,<br/>
                  document.getElementById('app'));<br/>
            </code>
            The Last line should seem familiar as it has not changed. We're still referencing the id="app" &#60;div&#62; we coded into our index.html. All we have done here is switch out our &#60;App /&#62; element for our Router
            element. Within the Router element we place our Routes. In the first route or 'parent route' we place our container Component, in this case
            the 'Layout' component along with the path '/'. Right below that we set the default or 'home' page in our application with a closing &#60;/IndexRoute&#62;.
            Below that we list all our routes or 'children routes' with their corresponding paths.<br/>
            <p>Important! Pay close attention to what's happening here <code style={code}>&#60;Route path="homePage" component=&#123;HomePage&#125;&#62;&#60;/Route&#62;</code>. The path is similar
          to the component but the 'h' is lowercased. We do not want to have the possibility of duplicates within any of our components. Just a heads up for best practice.
            </p>
            <p>
            At this point we can delete our 'var App' decloration since it no longer exists in our ReactDOM.render method. So our app.js file will now look like:<br/>
            <code style={code}>
                //app.js
                <br/>
                import React from "react";<br/>
                import ReactDOM from "react-dom";<br/>
                import &#123; Router, Route, IndexRoute, Link &#125; from "react-router";<br/>
                ReactDOM.render( <br/>
                &nbsp; &#60;Router &#62;<br/>
                  &nbsp; &nbsp;    &#60;Route path="/" component=&#123;Layout&#125;&#62;<br/>
                    &nbsp; &nbsp; &nbsp;     &#60;IndexRoute component=&#123;HomePage&#125;&#62;&#60;/IndexRoute&#62;<br/>
                    &nbsp; &nbsp;  &nbsp;    &#60;Route path="page1" component=&#123;Page1&#125;&#62;&#60;/Route&#62;<br/>
                      &nbsp; &nbsp; &nbsp;   &#60;Route path="page2" component=&#123;Page2&#125;&#62;&#60;/Route&#62;<br/>
                      &nbsp; &nbsp; &nbsp;   &#60;Route path="homePage" component=&#123;HomePage&#125;&#62;&#60;/Route&#62;<br/>
                  &nbsp; &nbsp;  &#60;/Route&#62;<br/>
              &nbsp; &#60;/Router&#62;,<br/>
                  document.getElementById('app'));<br/>
            </code>
            </p>
              We'll come back to our app.js shortly. Let's create a new folder called pages. Inside let's add a file 'Layout.js'. In this file
              we'll import both 'React' and 'react-router' after which we will then export this component so we can have access to it in our app.js. Your
              code should end up looking something like this: <br/>
              <code style={code}>
              //  &nbsp;./pages/Layout.js
              <br/>
                  import React from "react";<br/>
                  import &#123; Link &#125; from "react-router";<br/>

                  export default class Layout extends React.Component &#123;<br/>
                  &nbsp;  render()&#123;<br/>
                    &nbsp;  const &#123; location &#125; = this.props;<br/>
                  &nbsp;&nbsp;    return(<br/>
                    &nbsp;&nbsp;&nbsp;    &#60;div&#62;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;      &#123;this.props.children&#125;<br/>
                      &nbsp;&nbsp;&nbsp;  &#60;/div&#62;<br/>

                    &nbsp;  );<br/>
                  &nbsp;  &#125;<br/>
                  &#125;<br/>
              </code>
              <p> Here we are 'extending' our base Component 'app' by exporting our class 'Layout' as a React.Component.</p><br/>
              <p>&nbsp;&nbsp;&nbsp; ^Read that one more time.^ </p><br/>
              We are essentially creating a branch in our component tree. And you're propbably thinking to yourself that's great and all James but what the heck is
                all that this.props nonsense?! Patience we're getting there!
                <p>Well 'props' is one of 3 ways we handle data in React. The two stable
                choices here are 'props' and 'state'. State is available through 'this.state' and is used when a component has an internal value that
                only effects that specific component. Props on the other hand can be injected into other components. So here we call the 'this.props.children' in order to
                have access to the children of our parent Route. Remember &#60;Route path="/" component=&#123;Layout&#125;&#62;?</p>

              <p>
                Let's head back to our app.js and complete the connection by adding the line:
                <br/><code style={code}>import Layout from "./pages/Layout";</code><br/>
                right below the rest of imports. React is smart enough to know it's looking for a .js file, so we don't need to specify the file type just
                the path.
              </p>
              <p>
                Last Step! Almost there!
              </p>
              <p>
                Sinice you're now an import/export pro, we'll move a little faster through the final step. We will now add a few files inside
                our 'pages' folder. Let's say a 'HomePage.js' and a 'Page1.js'. These two files for the sake of simplicity will be almost identical, with the exception
                of your personal touch. Be creative!<br/>
                </p>

                So the boilerplate code will be:<br/>
                <code style={code}>
                    import React from "react";<br/>
                    import &#123; Link &#125; from "react-router";<br/>

                    export default class (Name of the Component) extends React.Component &#123;<br/>
                    &nbsp;  render()&#123;<br/>
                    &nbsp;&nbsp;    return(<br/>
                      &nbsp;&nbsp;&nbsp;    &#60;div&#62;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;      Your Custom HTML<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;    &#60;Link to="otherComponent"&#62;otherComponent&#60;/Link&#62;<br/>
                        &nbsp;&nbsp;&nbsp;  &#60;/div&#62;<br/>

                      &nbsp;  );<br/>
                    &nbsp;  &#125;<br/>
                    &#125;<br/>
                </code>
                <p>
                  Ok! So what has happened here is we created two files that references the other file's &#60;Route&#62; path in our app.js. For example in our './pages/HomePage.js' file
                  we would write: <br/> <code style={code}>export default class HomePage extends React.Component</code><br/>
                  and our Link tag would in return reference the other file ('Page1.js'):<br/>
                  <code style={code}> &#60;Link to="page1"&#62;Page1&#60;/Link&#62;<br/> </code>
                  </p>
                  <p>
                  And in our './pages/Page1.js' file we'd just write: <br/>
                   <code style={code}>export default class Page1 extends React.Component</code><br/>
                   and our Link tag would in return reference the other file ('Page1.js'):<br/>
                   <code style={code}> &#60;Link to="homePage"&#62;HomePage&#60;/Link&#62;<br/> </code>
                </p>
                <p>
                  Home Stretch! These Link tags almost act as local &#60;a>&#60;/a> tags. (Don't worry we'll learn to style them in our next section) All that's really left is linking them up with our
                  app.js. The process is super simple and only requires us importing the actual components we created!<br/>
                  back in our app.js file add the following lines: <br/>
                  <code style={code}> import HomePage from "./pages/HomePage";<br/>
                  import Page1 from "./pages/Page1";</code>
                </p>
                <p>
                  Boom-Shaka-Laka! It's as easy as that. We can now add as many pages as we want by repeating these four simple steps.  First we add a <code style={code}>&#60;Route path="newFile" component=&#123;NewFile&#125;&#62;&#60;/Route&#62;</code> nested
                     inside our Router in our app.js. Next we create a file within our pages folder './pages/NewFile.js'. Within that file we export our component: <br/> <code style={code}>export default class NewFile extends React.Component</code> <br/>and add our &#60;Link&#62; tags(don't forget to import 'react' and 'react-router'). Then we connect it by
                  importing the component into our app.js: <br/>
                  <code style={code}> import NewFile from "./pages/NewFile";</code>
                </p>
                Done and Done!
        </div>
        <div style={resourceText}>
          <h3>In-Line Styling</h3>
          Styling in React is very simple. In-line is simply done by adding a style attribute on your element.<br/>
          Example: <code style={code}>&#60;div style=&#123;container&#125;&#62;&#60;/div&#62;</code><br/>
          Then this attribute is declared within the render method before the return. Like so:<br/>
          <code style={code}>
          render()&#123; <br/>
          &nbsp; const container=&#123;width:"80%", marginBottom:"50px"&#125;;<br/>
            &nbsp; return()
          </code> <br/>
          You can write css styling in both Camel Case - backgroundColor:"#2b2b2b" or in normal syntax as a string - "background-color":"#2b2b2b".
          <br/>You can always add a .css file in your route directory and require it as a link in your index.html. Just note that if you wish to access
          this, you need to use the className syntax  &#60;div  className="container"&#62;. The reason for this is that class is reserved for the React library
          when you create and declare new components.
      </div>
      </div>

    );
  }
}
