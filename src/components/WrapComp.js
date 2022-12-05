import React from 'react';
import HeaderComp from './HeaderComp';
import MainComp from './MainComp';
import FooterComp from './FooterComp';
import ModalComp from './ModalComp';

function WrapComp(){

  const [show, setShow] = React.useState(false);
  const modalOpen=()=>{
    setShow(true);
  }
  const modalClose=()=>{
    setShow(false);
  }

  return(
    <div id="wrap">
      <HeaderComp/>
      <MainComp modalOpen={modalOpen}/>
      <FooterComp/>
      {
        show&&<ModalComp modalClose={modalClose}/>
      }
    </div>
  )
}
export default WrapComp;