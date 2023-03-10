import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/Login';
import Register from '../auth/Register';
import Landing from '../layouts/Landing';
import {Link } from 'react-router-dom'


const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}

export default Routers;

