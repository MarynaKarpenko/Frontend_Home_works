import style from './Offers.module.css';
import line from './Img/line.png';


function Offers(){

    return(
        <div className={style.offers}>
            <div className={style.that}>
            <img src={line} alt="line" className={style.offers_img}></img>
            <p className={style.offers_text}>Годовое ТО</p>
        </div>
        <div className={style.wheel}>
            <img src={line} alt="line" className={style.offers_img}></img>
            <p className={style.offers_text}>Выравнивание колес</p>
        </div>
        <div className={style.setting}>
            <img src={line} alt="line" className={style.offers_img}></img>
            <p className={style.offers_text}>Настройка переключателей</p>
        </div>
        </div>
    )
}
export default Offers;