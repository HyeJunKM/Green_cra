import React from 'react';

function Section2Comp({notice,gallery, modalOpen}){

  const onClickModal=(e)=>{
    e.preventDefault();
    modalOpen();
  }
  return (
    <section id="section2">
      <div className="left">
        <button className="notice-btn">공지사항</button>
        <div className="notice-box board-box">
          <div className="gap">
            <ul>
              {
                notice.map((item,idx)=>{
                  return(
                    idx===0?
                    <li key={idx}><a href="!#" onClick={onClickModal} className={"modal-btn"}>{item.제목}</a><span>{item.날짜}</span></li>
                    :
                    <li key={idx}><a href="!#">{item.제목}</a><span>{item.날짜}</span></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="center">
        <button className="gallery-btn">갤러리</button>
        <div className="gallery-box board-box">
          {
            gallery.map((item,idx)=>{
              return(
                <a key={idx} href="!#" title={item.title}><img src={item.imgSrc}/></a>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <div className="banner">
          <div className="title"><h2>EVENT BANNER</h2></div>
          <div className="img-box">
            <a href="!#" title="banner"><img src="./img/banner.jpg" alt="banner"/></a>
          </div>
        </div>
      </div>
    </section>
  )
}
Section2Comp.defaultProps = {
  notice: [
    {제목:"정기후원 프로젝트 안내", 날짜:"2022.11.23"},
    {제목:"자주하는 질문", 날짜:"2022.11.20"},
    {제목:"서버 점검 안내", 날짜:"2022.11.17"},
    {제목:"GREEN 복지재단 공지사항", 날짜:"2022.11.15"}
  ],
  gallery: [
    {title:"icon1", imgSrc:"./img/icon1.png"},
    {title:"icon2", imgSrc:"./img/icon2.png"},
    {title:"icon3", imgSrc:"./img/icon3.png"}
  ]
}

export default Section2Comp;