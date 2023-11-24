import style from './Advertising.module.css';
import bike from './Img/bike.jpg';

function Advertising(){
    return(
        <div className={style.advertising}>
            <div className={style.advertising_text}>
            <h5 className={style.dvertising_text_title}>Что мы предлагаем</h5>
            <p className={style.dvertising_text_par}>В нашей мастерской можно выполнить комплексное техническое обслуживание
                велосипеда, ремонт и настройку всех
                его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и
                дорогого ремонта. Все работы выполняем качественно и с душой.
            </p>
        </div>
        <img src={bike} alt="bike" className={style.advertising_img}></img>
        </div>
    )
}
export default Advertising;