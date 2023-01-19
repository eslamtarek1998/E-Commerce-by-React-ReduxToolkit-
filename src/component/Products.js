import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {fetchProducts} from '../redux/Slice'
import {addToCart} from '../redux/cartSlice'
import { Link } from 'react-router-dom';

export default function Products() {

    const products=useSelector((state)=>state.products)
    // console.log(products)

    const dispatch=useDispatch()

    
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])


    /////// ele gya deh b2a 5asa be elfilter llmontgat ele 3ndy ////////////////////////////////////////////////

    const api_url="https://fakestoreapi.com/products"
    const [categories,setCategories]=useState([])

    useEffect(()=>{
      fetch(`${api_url}/categories`)
      .then((res)=>res.json())
      .then((data)=>setCategories(data))
    },[])

    const[element,setElement]=useState(products)
    
    //  products deh ele gya mn fo2 bs kan lazm a7otha fe state gdeda 3shan a3rf a3mlha update e2ra elshr7 ele t7t ///////


    const getProductsCategory=(categoryName)=>{
      console.log(categoryName)
      fetch(`${api_url}/category/${categoryName}`)
      .then((res)=>res.json())
      // .then((data)=>console.log(data))  // mynf3sh ash8l eletnen ya deh ya ele t7tha 
      .then((data)=>setElement(data))

    }


    const getAllProducts=()=>{
      fetch(api_url)
      .then((res)=>res.json())
      .then((data)=>setElement(data))
      // .then((data)=>console.log(data))
    }
    
    useEffect(()=>{
      getAllProducts()
    },[])


 ///////////////////////////////////////////////////////////////////////////////////////////////// nhayt logic  elfilter t7t hrsm b2a///////// 
  return (
    
    <>
             <Slider/>

               <h2 style={{textAlign:"center",marginTop:"50px"}}>Our Products</h2>

             <Container className='py-5'>

              <button className='btn btn-info' onClick={()=>getAllProducts()} >All</button>
           

      {categories.map((ele)=>{
        return <button key={ele} className='btn btn-info ' style={{textAlign:"center"}} onClick={()=>getProductsCategory(ele)}>{ele}</button>
      })}




    
   <Row className='py-5'>


           {/* ele t7t deh bdl mkant element kant products ele gya mn eluseselector mn elredux bs 3mlt state gdeda 3shan a3rf a3mlha update
            lma ash8l fun getproductcategory ele bt5lene ageb data bta3t kol f2a lma ados 3la elzorar */}

    {element.map((ele)=>(
        <Col key={ele.id}>
        <Card style={{ width: '300px',marginBottom:"30px",height:"700px",position:"relative" }}>
           <Card.Img style={{height:'300px',width:"100%"}} variant="top" src={ele.image} />
           <Card.Body>
           <Card.Title style={{textAlign:"center",marginTop:"40px"}}>
            {ele.title}
            </Card.Title>
           <Card.Text style={{textAlign:"center",marginTop:"40px"}}>
            <h5 style={{color:"green"}}>{ele.price} $</h5>
           </Card.Text>
           <Button style={{position:"absolute",bottom:"20px",left:"30px"}} variant="primary" onClick={()=>dispatch(addToCart(ele))}>Add To Cart</Button>
           <Link style={{marginLeft:'25px',position:"absolute",bottom:"20px",right:"30px"}} className='btn btn-primary' to={`/product/${ele.id}`}>Show Details</Link>
           </Card.Body>
       </Card>
           </Col>
    ))}
   
    

</Row>




</Container>

    </>
  )
}
