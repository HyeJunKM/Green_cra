// 1. 컴포넌트
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

    function HeaderComp(props){
      const {homePath,logoTitle,imgSrc,imgAlt, subMenu1, subMenu2, subMenu3, subMenu4} = props;

      ////// 상태관리 React.useState()
      //const [addClass1, setAddClass1] = React.useState(false); //기본값false
      //const [addClass2, setAddClass2] = React.useState(false); 
      //const [addClass3, setAddClass3] = React.useState(false); 
      //const [addClass4, setAddClass4] = React.useState(false); 

      const [addClass, setAddClass] = React.useState({
        addClass1: false,
        addClass2: false,
        addClass3: false,
        addClass4: false
      });

      const {addClass1, addClass2, addClass3, addClass4} = addClass;

      const onMouseEnter1=()=>{
        setAddClass({
          addClass1: true,
          addClass2: false,
          addClass3: false,
          addClass4: false
        })
      }
      const onMouseEnter2=()=>{
        setAddClass({
          addClass1: false,
          addClass2: true,
          addClass3: false,
          addClass4: false
        })
      }
      const onMouseEnter3=()=>{
        setAddClass({
          addClass1: false,
          addClass2: false,
          addClass3: true,
          addClass4: false
        })
      }
      const onMouseEnter4=()=>{
        setAddClass({
          addClass1: false,
          addClass2: false,
          addClass3: false,
          addClass4: true
        })
      }

      ///// nav 영역 onMouseLeave -> addClass false로 변경
      const onMouseLeaveAddClass=()=>{
        setAddClass({
          addClass1: false,
          addClass2: false,
          addClass3: false,
          addClass4: false
        })
      }

      return(
        <header id="header">
          <div className="left">
            <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt}/></a></h1>
          </div>
          <div className="right">
            <nav id="nav" onMouseLeave={onMouseLeaveAddClass}>
              <ul>
                <li>
                  <a href="#" onMouseEnter={onMouseEnter1} className={`menu-btn ${addClass1&&'on'}`} title="재단소개">재단소개</a>
                  <div className={`sub sub1 ${addClass1&&'on'}`}>
                    <ul>
                      {
                        subMenu1.map((item,idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div className={addClass1|addClass2|addClass3|addClass4?'sub-bg on':'sub-bg'}></div>
                </li>
                <li>
                  <a href="#" onMouseEnter={onMouseEnter2} className={`menu-btn ${addClass2&&'on'}`} title="후원하기">후원하기</a>
                  <div className={`sub sub2 ${addClass2&&'on'}`}>
                    <ul>
                      {
                        subMenu2.map((item,idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" onMouseEnter={onMouseEnter3} className={`menu-btn ${addClass3&&'on'}`} title="자료실">자료실</a>
                  <div className={`sub sub3 ${addClass3&&'on'}`}>
                    <ul>
                      {
                        subMenu3.map((item,idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" onMouseEnter={onMouseEnter4} className={`menu-btn ${addClass4&&'on'}`} title="스토리">스토리</a>
                  <div className={`sub sub4 ${addClass4&&'on'}`}>
                    <ul>
                      {
                        subMenu4.map((item,idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )
    }

    HeaderComp.defaultProps = {
      logoTitle: 'Green 복지재단',
      homePath: './index.html',
      imgSrc: "./img/logo.png",
      imgAlt:'logo',
      subMenu1: ['설립취지','연혁','오시는 길'],
      subMenu2: ['국내후원','국외후원','맞춤후원'],
      subMenu3: ['서식자료실','사진자료실','후원양식'],
      subMenu4: ['웹진','보고서','나의 후원']
    }

    function MainComp({modalOpen}){
      return(
        <main id="main">
          <Section1Comp/>
          <Section2Comp modalOpen={modalOpen}/>
        </main>
      )
    }
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
                            <li key={idx}><a href="#" onClick={idx===0&&onClickModal} className={idx===0?"modal-btn":''}>{item.제목}</a><span>{item.날짜}</span></li>
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
                        <a ket={idx} href="#" title={item.title}><img src={item.imgSrc}/></a>
                      )
                    })
                  }
                </div>
              </div>
              <div className="right">
                <div className="banner">
                  <div className="title"><h2>EVENT BANNER</h2></div>
                  <div className="img-box">
                    <a href="#" title="banner"><img src="./img/banner.jpg" alt="banner"/></a>
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

    function FooterComp(){
      return(
        <footer id="footer">
          <div className="left">
            <h1><a href="#" title="logo"><img src="./img/footerLogo.png" alt="logo"/></a></h1>
          </div>
          <div className="center">
            <div className="row1">
              <span><a href="#" title="하단메뉴1">하단메뉴1</a></span>
              <span><i>|</i></span>
              <span><a href="#" title="하단메뉴2">하단메뉴2</a></span>
              <span><i>|</i></span>
              <span><a href="#" title="하단메뉴3">하단메뉴3</a></span>
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

// 2. 리액트 돔(#root)과 컴포넌트 연동
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render (
//   <WrapComp/>
// );

ReactDOM.render(
  <WrapComp/>,document.getElementById('root')
);