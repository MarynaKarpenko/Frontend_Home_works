import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import s from "./AboutPage.module.css"
import Stars from '../../components/Stars/Stars'

export default function AboutPage(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return(
        <div className={s.about_page}>
            {products.map((elem) => (
                <div className={s.card} key={elem.id}>
                    <Link to={'' + elem.id}>
                        <h1 className={s.about_title}>{elem.title}</h1>
                    </Link>
                <Stars rating={elem.rating.rate} />
                </div>
            ))}
        </div>
    )
}