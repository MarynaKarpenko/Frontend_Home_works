import style from './About.module.css'
import dino from './Img/dino.png'

function About(){

    return(
        <div className={style.about}>
            <div className={style.about_text}>
                <h1 className={style.name}>Веломастерская “Велозар”</h1>
                <p className={style.about_name}>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые
                    смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш
                    двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <img src={dino} alt="dino" className={style.about_img}></img>
        </div>
    )
} 
export default About;