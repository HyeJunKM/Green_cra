import React from 'react';

function FooterComp(){
  return(
    <footer id="footer">
      <div className="left">
        <h1><a href="!#" title="logo"><img src="./img/footerLogo.png" alt="logo"/></a></h1>
      </div>
      <div className="center">
        <div className="row1">
          <span><a href="!#" title="하단메뉴1">하단메뉴1</a></span>
          <span><i>|</i></span>
          <span><a href="!#" title="하단메뉴2">하단메뉴2</a></span>
          <span><i>|</i></span>
          <span><a href="!#" title="하단메뉴3">하단메뉴3</a></span>
        </div>
        <div className="row2">
          <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
        </div>
      </div>
      <div className="right">
        <select name="family" id="family">
          <option value="" selected>패밀리사이트</option>
          <option value="패밀리사이트1">패밀리사이트1</option>
          <option value="패밀리사이트2">패밀리사이트2</option>
          <option value="패밀리사이트3">패밀리사이트3</option>
        </select>
      </div>
    </footer>
  )
}

export default FooterComp;