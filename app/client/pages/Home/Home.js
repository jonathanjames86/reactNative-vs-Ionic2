import React from "react";
import { Link } from "react-router";
import Header from './Header';
import FewThings from './FewThings';
import TechUsed from './TechUsed';
import FooterNav from './FooterNav';


export default class Home extends React.Component {
  render(){

    return(
      <div>
        <Header />

        <FewThings />

        <TechUsed />

        <FooterNav />
      </div>
    );
  }
}
