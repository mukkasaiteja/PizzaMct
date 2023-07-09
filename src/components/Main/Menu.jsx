
import React, { useEffect, useState } from 'react'
import './Home.css'

import { useNavigate } from 'react-router-dom'

function Menu() {
  const navigate=useNavigate();
  const [pizza,setPizza]=useState([])
  const goto=()=>{
    navigate("/Add")
  }
    
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0fc1bbd449msh43c1734f4ce93fcp1f32ebjsn760c1f4ac686',
		'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
	}
};
    useEffect(()=>{
        fetch('https://pizzaallapala.p.rapidapi.com/productos',options)
	.then(response => response.json())
	.then(data =>{ console.log(data.productos);setPizza(data.productos)})
	.catch(err => console.error(err));

    })
  return (
   <div>
    <h1 style={{textAlign:'center'}}>MENU</h1>
     <div className='cards' style={{marginTop:"50px"}}>
    

    {
                   pizza.map((e)=>{
                    return(
                     <div className='content'>
                       <div className='card'>
                          <img src={e.linkImagen} alt="img loading" style={{height:'200px' ,width:'200px',borderRadius:'50%'}}  />
                          <p>Pizza name :-{e.descripcion}</p>
                          <p> Pizza details:-{e.nombre}</p>
                          <p> RS:{e.precio}</p>
                          <button style={{width:"300px"}} onClick={goto} className='custom-btn btn-5 '>ADD to cart</button>
      
    
                      </div>
                     </div>
                    )
                   })
            }
        </div>
   </div>
  )
}

export default Menu