import '../styles/Intro.css';

import Navbar from './Navbar.jsx';

const Intro = function(){
    return(
        <div className="mainBox">
            <div className="logoBox">
                <div className="logoInsert">
                    <div className="logo"></div>
                    <p style={{fontSize: '13px'}}>스토어 정보</p>
                </div>
            </div>
            <div className="top">
                <Navbar />
                <div className="search">
                    <input type="text" placeholder="카카오프렌즈 상품검색" />
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
                </div>
            </div>
            <hr/>
        </div>
    );
}



export default Intro;