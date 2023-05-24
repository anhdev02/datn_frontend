import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Footer from '../common/Footer';
import FooterRes from '../common/FooterRes';
import Header from '../common/Header';
import HeaderRes from '../common/HeaderRes';
import BestSeller from '../others/BestSeller';
import BestSellerRes from '../others/BestSellerRes';
import NewProducts from '../others/NewProducts';
import NewProductsRes from '../others/NewProductsRes';
import Aside from '../common/Aside';

const NewProductsPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_7866'>
      <Aside/>
        <div id="container">
            <HeaderRes/>
            <NewProductsRes/>
            <FooterRes/>
            <a href="#container" id="btnFoldLayout" style={{display: 'inline', background: 'rgba(0, 0, 0, 0.7)', zIndex:'10'}}>Menu Toggle</a>
        </div>
    </div>
    :
    <div className='index displaynone_743 xans_layout_statelogoff'>
        <Header/>
        <NewProducts/>
        <Footer/>
    </div>
  )
}

export default NewProductsPage