import style from './Header.module.css'
import logo from './media/logo.png'

function Header(props){
    const {image} = props
    return(
        <div className={style.wrapper}>
            <img className={style.logo} src={logo} alt="logo"></img>
            <nav>
                <a href="" className={style.nav_link}>О нас</a>
                <a href="" className={style.nav_link}>Услуги</a>
                <a href="" className={style.nav_link}>Аренда</a>
            </nav>
            <button className={style.connection}>Связаться</button>
        </div>
    )
} 
export default Header;