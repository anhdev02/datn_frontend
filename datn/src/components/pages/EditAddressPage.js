import React from 'react'
import { useMediaQuery } from 'react-responsive';
import HeaderInfoRes from '../common/HeaderInfoRes';
import FooterRes from '../common/FooterRes';
import Header from '../common/Header';
import EditAddress from '../others/EditAddress';
import Footer from '../common/Footer';
import EditAddressRes from '../others/EditAddressRes';
import { useParams } from 'react-router-dom';

const EditAddressPage = () => {
  const {id} = useParams();
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_myshop_addrlist_8631'>
        <div id="container">
            <HeaderInfoRes/>
            <EditAddressRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='displaynone_523 xans_layout_statelogoff_489 index'>
        <Header/>
        <EditAddress id={id}/>
        <Footer/>
    </div>
  )
}

export default EditAddressPage