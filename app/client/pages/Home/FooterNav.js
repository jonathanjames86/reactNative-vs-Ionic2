import React from 'react';


export default class FooterNav extends React.Component{

  render(){
    const footerNav = {width: "100%", height:"25vh", backgroundColor:"#EBF0F6", display:"flex", alignItems:"center"};
    const footNavCont = {width:"50%", height:"60%", borderRight:"1px solid #858F9F"};

    return(
      <div style={footerNav}>
        <div style={footNavCont}></div>
        <div></div>

      </div>

    
    );
  }
}
