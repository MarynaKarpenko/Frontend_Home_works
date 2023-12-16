import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import s from "./ProductInfoPage.module.css"
import Stars from "../../components/Stars/Stars"


export default function ProductInfoPage(){

    const {id} = useParams()

    const [products, setProducts] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])

    return(
        <div className={s.info_page}>
            <div className={s.content}>
                <h1 >{products.title}</h1>
                <img src={products.image}></img>
                <p className={s.p_price}>Price: {products.price} $</p>
                <p className={s.p_description}>{products.description}</p>
                <Stars rating={products.rating?.rate} />
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>  
    )
}