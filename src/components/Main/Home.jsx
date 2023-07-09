import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {
    const [pizza,setPizza]=useState([])
    
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
    <div className='Home'>
      <div className='bg'>
        <div className="info">
           <h1>DELIVER TO THE DOORSTEP DOORSTEP</h1>
           <i class="fa-sharp fa-solid fa-square-check"></i><h3>CHOSSE YOUR INGREDINTS</h3><br/>
           <i class="fa-solid fa-square-check"></i><h3>GET FREE DEVLIVERY 24/7</h3><br />
            <i class="fa-solid fa-square-check"></i><h3>SPECIAL GIFT COUPONS</h3><br/>
            <input type="text" className='custom-btn input ' placeholder='Enter' /><button class="custom-btn btn-5"><span>Read More</span></button><br/>
            <i style={{fontSize:'30px'}} class="fa-solid fa-location-dot"></i> <p style={{fontSize:"20px"}}>loaction</p>
        </div>

      </div>
      <div className='cards'>
        {
               pizza.map((e)=>{
                return(
                 <div className='content'>
                   <div className='card'>
                      <img src={e.linkImagen} alt="img loading" style={{height:'200px' ,width:'200px',borderRadius:'50%'}}  />
                      <p>Pizza name :-{e.descripcion}</p>
                      <p> Pizza details:-{e.nombre}</p>
                      <p> RS:{e.precio}</p>
                      <div class="stars">
                        <form action="">
                          <input class="star star-5" id="star-5" type="radio" name="star"/>
                          <label class="star star-5" for="star-5"></label>
                          <input class="star star-4" id="star-4" type="radio" name="star"/>
                          <label class="star star-4" for="star-4"></label>
                          <input class="star star-3" id="star-3" type="radio" name="star"/>
                          <label class="star star-3" for="star-3"></label>
                          
                          
                        </form>
                      </div>

                  </div>
                 </div>
                )
               })
        }
      </div>
      


    </div>
  )
}

export default Home