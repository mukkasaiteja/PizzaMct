import React from 'react'
import './Add.css'
import { useNavigate } from 'react-router-dom'

function Add() {
  const nagvigate =useNavigate()
  const name=()=>{
    nagvigate('/Thanks')
  }
  return (
    <div>
        <div className="form">
          <div className="gg">
          <div className="head">
            <h1>welocome to pizza store</h1>
            <h3>we will in delivery  40 min</h3>
           </div>
           <div className="forms">
            <label htmlFor="">EMAIL ID:-</label>
            <input type="email" name="" id="" required /><br/>
            <label htmlFor="">PHONE NO</label>
            <input type="number" name="" id="" required /><br/>
            <label htmlFor="">NUMBER OF SLICES</label>
            <input type="number" name="" id="" required /><br/>
            <label htmlFor="">PIZZA SIZE : -</label><br/>
            <input type="radio" name="nchis" id="" required/><label htmlFor="">8 INCHIS</label>
            <input type="radio" name="nchis" id=""  required/><label htmlFor="">10 INCHIS</label>
            <input type="radio" name="nchis" id="" required /><label htmlFor="">12 INCHIS</label>
            <input type="radio" name="nchis" id="" required /><label htmlFor="">14 INCHIS</label><br/>
            <label htmlFor="">topping :-</label><br/>
            <input type="checkbox" name="" id=""  /><label htmlFor="">pepperoni</label> 
            <input type="checkbox" name="" id="" /><label htmlFor="">Onions</label>
            <input type="checkbox" name="" id="" /><label htmlFor="">Mushroom</label>
            <input type="checkbox" name="" id="" /><label htmlFor="">sausage</label><br/>
            <input type="checkbox" name="" id="" />  <label htmlFor=""> I agree to the terms and conditions </label><br/>
            <button style={{width:"400px"}} onClick={name} className='bt-5  custom-btn'>ORDER NOW</button>

           </div>
          </div>
        </div>
    </div>
  )
}

export default Add