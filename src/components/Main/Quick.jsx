

import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

const Quick = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [pizza,setPizza]=useState([])
 
 
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '768d6b335cmsh919d097e5789ba5p11a5e0jsnac841190b603',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
    };
    useEffect(()=>{
      fetch('https://pizzaallapala.p.rapidapi.com/productos',options)
.then(response => response.json())
.then(data =>{ console.log(data.productos);setPizza(data.productos)})
.catch(err => console.error(err));

  })
  const clickedItem=pizza.find((element)=>element.id===parseInt(id))
  const cart=()=>{
    navigate('/Add')
  }
  return (
    <div style={{margin:'100px 50px' ,display:'flex' ,padding:'20px' ,alignItems:'center',boxShadow:'0px 0px 30px gray',borderRadius:'20px'}} className='interface'>
      <div className='left-panel'>
        {clickedItem&&(
          <div style={{borderRight:'4px solid black',padding:'20px'}} >
            <img src={clickedItem.linkImagen} alt='img loading' width={400} height={400} style={{borderRadius:"50%"}}/>
          </div>
        )}
      </div>
      <div className='right-panel' style={{marginLeft:'40px' ,textAlign:"center"}}>
        {clickedItem&&(
          <div>
            <h2>{clickedItem.nombre}</h2>
            <p>Rs: {clickedItem.precio}</p>
            <h3>About: {clickedItem.descripcion}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis dignissimos voluptates suscipit adipisci nam alias, dicta nemo quaerat voluptas perspiciatis ratione error illo autem, architecto cupiditate! Quidem, fugiat aperiam?</p>
            <button className='cart ' onClick={cart}>Add To Cart</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quick
