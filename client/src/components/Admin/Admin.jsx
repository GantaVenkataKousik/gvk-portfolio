
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Nav from './Nav/Nav.jsx';
import FeedBack from './FeedBack/FeedBack.jsx';
import Subscribers from './Subscribers/Subscribers.jsx';
import Rating from './Rating/Rating.jsx';
import './styles/Admin.css'

function App() {

  return (
    <>
        <Nav />
      <Routes>
        <Route path="/admin/feedback" element={<FeedBack />} />
        <Route path="/admin/subscribers" element={<Subscribers />} />
        <Route path="/admin/rating" element={<Rating />} />
      </Routes>
    </>

  );
}

export default App;
