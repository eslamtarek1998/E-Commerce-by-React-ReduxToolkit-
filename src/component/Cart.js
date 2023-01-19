import React from 'react'
import {Button, Container,Image} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {deleteFromCart,clear} from '../redux/cartSlice'




export default function Cart() {

  

  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cart)
  const totalPrice=cart.reduce((acc,ele)=>{
    acc+=ele.price*ele.quantity
    return acc
  },0)
  


  return (
    <Container>
      <h1 className='py-5 ' style={{color:"red"}}>Welcome To Cart</h1>
      <Button className='mb-3' variant='danger' onClick={()=>dispatch(clear())}>Clear</Button>
      <h5 style={{color:"green"}}>Total Price : {totalPrice.toFixed(2)} $</h5>
      <Table striped bordered hover className='py-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price For One Piece</th>
          <th>Price For Quantity</th>
          <th>Img</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>

       {cart.map((ele)=>(
         <tr key={ele.id}>
         <td>{ele.id}</td>
         <td>{ele.title}</td>
         <td>{ele.quantity}</td>
         <td>{ele.price} $ </td>
         <td>{ele.price*ele.quantity} $ </td>
         <td><Image src={ele.image} alt={ele.title} style={{width:"100px" ,height:"100px"}}/></td>
         <td><Button variant='danger' onClick={()=>dispatch(deleteFromCart(ele))}>Delete</Button>
         
         </td>

       </tr>
       ))}
       
      </tbody>
    </Table>
      
    </Container>
  )
}
