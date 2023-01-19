import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Container} from 'react-bootstrap'

export default function ProductDetails() {

    const api_url="https://fakestoreapi.com/products"
    const[product,setProduct]=useState({})
    const params=useParams()
    console.log(params)


    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product))
    },[])


  return (
    <Container>
        <div className='card'>
            <img src={product.image} alt={product.title} style={{width:"100%",height:"400px"}}/>
            <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>{product.description}</p>
                <p>price : {product.price} $</p>
            </div>
        </div>
    </Container>
  )
}
