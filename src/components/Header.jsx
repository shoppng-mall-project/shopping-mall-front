import '../styles/Header.css';

const Header = function (){
    return(
        <div className="inner_head">
            <div className='inner_wrap'>
                <div className='title_logo'>
                    <a href="http://localhost:3001/">
                        <img 
                        src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20240605/131847/assets/images/pc/pc_logo_231212.png" 
                        art ="메인로고" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;