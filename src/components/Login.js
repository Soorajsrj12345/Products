import {React,useState,useEffect }from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './login.css'

export default function Login() {

  return (
    <div>
<div className='first'>
<div className='second'><p className=''><i> Welcome</i></p> </div>

   <Form className='w-50'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
      </Form>   
      <Link to={"/view-products"}><Button variant="success" className='rounded text-center center'>Login</Button>{' '}</Link>
</div>
     </div>
  )
  }

