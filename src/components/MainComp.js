import React from 'react';
import Section1Comp from './main/Section1Comp';
import Section2Comp from './main/Section2Comp';

function MainComp({modalOpen}){
  return(
    <main id="main">
      <Section1Comp/>
      <Section2Comp modalOpen={modalOpen}/>
    </main>
  )
}
export default MainComp;