import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>

<ul>
  <li><Link class="active main" to="/">Home</Link></li>
  <li><Link className='main' to="/Pages">Pages</Link></li>
  <li><Link className='main' to="/Menu">Menu</Link></li>
  <li><Link className='main' to="/Blog">Blog</Link></li>
  <li><Link className='main' to='/Libary'>Libary</Link></li>

</ul>

<div>
    
</div>
    </div>
  )
}

export default Nav