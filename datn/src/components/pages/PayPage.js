import React from 'react'
import { useMediaQuery } from 'react-responsive';
import HeaderAccountRes from '../common/HeaderAccountRes';
import FooterRes from '../common/FooterRes';
import Pay from '../others/Pay';
import PayRes from '../others/PayRes';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../assets/scss/displaynone_1925.scss'
import '../assets/scss/xans_layout_statelogoff_19480.scss'
import { useParams } from 'react-router-dom';

const PayPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  const {abc} = useParams();
  return (
    isTablet ?
    <div id="wrap">
        <div id="container">
          <HeaderAccountRes/>
          <PayRes/>
          <FooterRes/>
      </div>
    </div>
    :
    <div className='index displaynone_1925 xans_layout_statelogoff_19480'>
      <div id="userStyle">
        <Header/>
        <Pay abc = {abc}/>
        <Footer/>
      </div>
    </div>
  )
}

export default PayPage