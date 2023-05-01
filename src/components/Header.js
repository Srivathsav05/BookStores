import React from 'react'
import {Routes , Route, Link , NavLink , Navigate , Outlet , useNavigate} from 'react-router-dom';
import Login from './Login' ;
import Signup from './Signup';
import Home from './Home' ;
import Books from './Books';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";


import { useDispatch, useSelector } from 'react-redux';


function Header() {
  const navigate = useNavigate();
  const { userObj, isError, isLoading, isSucces, errMsg } = useSelector((state) => state.user);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {
              !isSucces && (
                <li className="nav-item active">
                <NavLink className='nav-link' to="Login" aria-selected="false"> Login </NavLink>
              </li>
              )
            }
            {/* <li className="nav-item active">
              <NavLink className='nav-link' to="Login" aria-selected="false"> Login </NavLink>
            </li> */}
            <li className="nav-item active">
              <NavLink className='nav-link' to="Home" aria-selected="false"> Home </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className='nav-link' to="Books" aria-selected="false"> Books </NavLink>
            </li>
            {/* <li className="nav-item active">
              <NavLink className='nav-link' to="Card" aria-selected="false"> Card </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>


      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Home" element={<Home />} />
        <Route path='Books' element={<Books />} />
        <Route path='card' element={<Card />}/>
      </Routes>
    </>
  )
}

export default Header