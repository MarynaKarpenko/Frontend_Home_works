import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import s from "./ProductInfoPage.module.css"

export default function ProductInfoPage(){

    const {id} = useParams()

    const [products, setProducts] = useState({})

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+{id})
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return(
        <div className={s.info_page}>
            <div className={s.content}>
                <h1 >{products.title}</h1>
            </div>
            <button></button>
        </div>  
    )
}