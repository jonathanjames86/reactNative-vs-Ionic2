import React from "react";


export default class Footer extends React.Component {
  render() {
    const footer = {
      backgroundColor: "#0F439B",
      height: "25vh",
      width: "100%",
      color:"#fff"
    }
    return (
      <footer style={footer}>
            FOOTER
            <p>Copyright &copy; React Native vs Ionic2</p>
            social media shtuff
      </footer>
    );
  }
}
