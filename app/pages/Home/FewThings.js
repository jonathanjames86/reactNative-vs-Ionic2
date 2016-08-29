import React from "react";


export default class FewThings extends React.Component{

render(){
  const forward = {width: '70vw',height:'100%', margin: "auto", marginTop:"5rem", marginBottom:"6rem",backgroundColor: "#fff", display:"flex", borderBottom:".85rem solid #0F439B"};
  const avatarContainer = {width: "15%", height:"100%", display:"flex", flexWrap: "wrap", justifyContent: "center", marginRight: "2rem", marginTop: "1rem"};
  const avatar = { width: "7rem", height: "7rem", backgroundImage:"url('https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfNAAAAJDhjOTNjYjM2LWFhYmEtNGYzMC1hNWFiLWU3ODg3NGJhMzlkMQ.jpg')", backgroundSize: "cover", borderRadius: "50%"};
  const preface = {width: "75%", height:"100%", marginBottom:"5rem"};


  return(
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
          process with the Windows and Android platforms (these frameworks work cross-platform). Languages, style-guides, and libraries studied. And the hours of docs I sorted through.</p>

          <p>Lastly, understand that Ionic 2 (as of August 2016) is still in beta and React Native has only been around a year or so (officially released to Android Sept.2015). There is undoubtly a bright future for these frameworks. The more I learn, the more
          excited I get, and whatever future finds I discover to be helpful or advantageous will be shared here.</p>
          Enough Chat! How about we dive in? Starting with the languages and libraries we will be using in JavaScript Mobile Development.
        </div>
    </div>
  );
  }
}
