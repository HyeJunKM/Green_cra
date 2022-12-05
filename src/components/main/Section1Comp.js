import React from 'react';

function Section1Comp(){
  return (
    <section id="section1">
      <div className="slide-container">
        <div className="slide-view">
          <ul className="slide-wrap">
            <li className="slide slide3"><a href="#" title="Green복지재단3"><img src="./img/img3.jpg" alt=""/></a></li>
            <li className="slide slide1"><a href="#" title="Green복지재단1"><img src="./img/img1.jpg" alt=""/></a></li>
            <li className="slide slide2"><a href="#" title="Green복지재단2"><img src="./img/img2.jpg" alt=""/></a></li>
            <li className="slide slide3"><a href="#" title="Green복지재단3"><img src="./img/img3.jpg" alt=""/></a></li>
            <li className="slide slide1"><a href="#" title="Green복지재단1"><img src="./img/img1.jpg" alt=""/></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Section1Comp;