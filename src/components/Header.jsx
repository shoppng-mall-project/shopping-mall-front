import '../styles/Header.css';
import cartIcon from '../assets/icon_cart.png';
import searchIcon from '../assets/icon_search.png';
import orderIcon from '../assets/icon_order.png';


const Header = function (isLoggedIn){
    return(
        <div className="inner_head">
            <div className='inner_wrap'>
                <div className='title_logo'>
                    <a href="/">
                        <img 
                        src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20240605/131847/assets/images/pc/pc_logo_231212.png" 
                        art ="메인로고" />
                    </a>
                </div>
                <div className='menu_util'>
                    <span className='icon'>
                        <a href='/'>
                            <img 
                            src={searchIcon}
                            art='search'></img>
                        </a>
                    </span>
                    <span className='icon'>
                        <a href='/cart'>
                            <img 
                            src={cartIcon}
                            art='cart'></img>
                        </a>
                    </span>
                    <span className='icon'>
                        <a href='/order'>
                            <img 
                            src={orderIcon}
                            art='order'></img>
                        </a>
                    </span>
                </div>
                <div className='menu_my'>
                    <a href='/login'>로그인</a>
                </div>
            </div>
        </div>
    )
}

const LoggedOutMenu = function (){
    return(
        <div className='menu_my'>
            <a href='/login'>로w인</a>
        </div>
    )
}

const LoggedInMenu = function (){
    <div className='menu_my_on'>
            <a href='/login'>로w인</a>
    </div>
}

export default Header;