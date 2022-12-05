import React from 'react';

function ModalComp({modalClose}){
  const onClickModalClose=(e)=>{
    e.preventDefault();
    modalClose();
  }
  return (
    <div className="modal">
      <div className="wrap">
        <div className="container">
          <div className="gap">
            <div className="title">
              <h1>복지재단 공지사항</h1>
            </div>
            <div className="content">
              <ul>
                <li>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.</li>
                <li>무궁화 삼천리 화려강 대한 사람 대한으로 길이 보전하세.</li>
                <li>남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.</li>
              </ul>
            </div>
            <div className="button-box">
              <button onClick={onClickModalClose} className="close-btn">닫기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComp;