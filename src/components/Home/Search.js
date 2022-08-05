import React from 'react'
import "../../styles/Search.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
export default function Search() {
  return (
    <div className='search_form'>
      <Navbar/>
        <div className='login_signup_link'>
         <Link to="/user/login"> <Button variant="danger">Login</Button></Link>
          <Link to="/user/signup"> <Button variant="danger">Signup</Button></Link>
           {/* <Button variant="danger">Login as Chef</Button> */}
        </div>
       <div className='search_block'>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Options
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <input type='search'/>
            <Button variant="success">Find Chef</Button>
        </div>
    </div>
  )
}
