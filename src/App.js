
import './App.css';
import { useContext } from "react";
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Main/Home';
import Pages from './components/Main/Pages';
import Menu from './components/Main/Menu';
import Blog from './components/Main/Blog';
import Libary from './components/Main/Libary';
import AuthContext from "./components/Main/Context";
import Add from './components/Main/Add';
import Quick from './components/Main/Quick';
import Login from './components/Main/Login';
import Thanks from './components/Main/Thanks';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
     <div> <Nav/></div>
     {isLoggedIn ? <div>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Pages' element={<Pages/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Libary' element={<Libary/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/Quick/:id' element={<Quick/>}/>
      <Route path='/Thanks' element={<Thanks/>}/>
    </Routes>
   </div> : <Login />}
  
    </div>
  );
}

export default App;
