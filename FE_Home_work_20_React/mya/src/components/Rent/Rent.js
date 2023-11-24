import style from './Rent.module.css';
import bike from './Img/bike2.jpg'

function Rent(){
    return(
        <div className={style.rent}>
            <img className={style.rent_img} src={bike} alt='rent'></img>
        <div className={style.rent_text}>
            <h5 className={style.rent_text_h5}>Прокат велосипедов</h5>
            <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в
                прекрасном парке!</p>
        </div>
        </div>
    )
}
export default Rent;