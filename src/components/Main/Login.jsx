import React from 'react'
import './Login.css'
import { useState, useContext } from "react";
import AuthContext from "./Context";

function Login() {
    const { login } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const verifyCrendentials = () => {
    if (user.name === "saiteja" && user.password === "saiteja@123") {
      login();
    } else {
      alert("Please Enter Proper Credentials");
    }
  };

  return (
    <div className='Login'>
            <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email" onChange={(event) => {
              setUser({
                ...user,
                name: event.target.value,
              });
            }}/><p>user id :- saiteja</p>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"  onChange={(event) => {
              setUser({
                ...user,
                password: event.target.value,
              });
            }}/><p>password :- saiteja@123</p>
				</div>
				<button class="button login__submit">
					<span class="button__text" onClick={verifyCrendentials}>Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

    </div>
  )
}

export default Login