import React from "react";


export default class Footer extends React.Component {
  render() {
    const footer = {
      backgroundColor: "#272E3A",
      height: "25vh",
      width: "100vw"
    }
    return (
      <footer style={footer}>
            <h1>FOOTER</h1>
            <p>Copyright &copy; React Native vs Ionic2</p>
      </footer>
    );
  }
}
