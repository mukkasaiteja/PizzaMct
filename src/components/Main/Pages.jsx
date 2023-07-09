import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom'
import './Pages.css'

function Pages() {
  // const [isHovered, setIsHovered] = useState(false);
  const [pizza,setPizza]=useState([])
  const navigate=useNavigate();
  const goto=()=>{
    navigate("/Add")
  }
  const togo=()=>{
    navigate('/Quick')
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

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  return (
    <div>
      {/* <div className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > */}
      

<div className='cards'>
        {
               pizza.map((e)=>{
                return(
                 
                   <div className='card main'>
                      <img src={e.linkImagen} alt="img loading" style={{height:'200px' ,width:'200px',borderRadius:'50%'}}  />
                      <p>Pizza name :-{e.descripcion}</p>
                      <p> Pizza details:-{e.nombre}</p>
                      <p> RS:{e.precio}</p>
                     
        <div className='buttons'>
          <button onClick={goto} className=" Cart custom-btn btn-5">ADD cart</button>
          <Link to={`/Quick/${e.id}`}> <button className="view custom-btn btn-9" onClick={togo}>Quick veiw</button></Link>
        </div>
      

                  </div>
                 
                )
               })
        }
      </div>
    {/* </div> */}
      
        
    </div>
  )
}

export default Pages