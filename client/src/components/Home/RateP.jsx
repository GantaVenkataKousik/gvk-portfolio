// RatePopup.jsx
import React, { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './style/popup.css'

const RateP = ({ onClose }) => {
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState(0)
  const handleEmailChange = e => {
    setEmail(e.target.value.trim())
  }

  const handleStarClick = starRating => {
    setRating(starRating)
  }

  const toastSuccess = (data) => {
    toast.success(data, {
      position: 'top-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }
  const toastError = (data) => {
    toast.error(data, {
      position: 'top-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  useEffect(() => { }, [email, rating])
  const handleSubmit = async e => {
    e.preventDefault()

    if (!email || rating === 0) {
      toastError('Enter valid email and rating!!!')
    } else {
      try {
        const response = await fetch('https://gvk-portfolio-api1.onrender.com/rating', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, rating })
        })
        console.log(response);
        if (response.ok) {
          toastSuccess('Your Rating submitted Succesfully!!');

        } else {
          toastError('Unexpected Error Occured!!')
        }
      } catch (error) { }

      onClose()
    }
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <div className='rate-popup'>
        <div className='rate-popup-content'>
          <div className='rate-popup-close' onClick={onClose}>
            <i className='fa-solid fa-times'></i>
          </div>

          <input
            type='text'
            placeholder='Enter email'
            onChange={handleEmailChange}
          />
          <h3>Rate my work</h3>
          <div className='stars'>
            {[1, 2, 3, 4, 5].map(index => (
              <span key={index} onClick={() => handleStarClick(index)}>
                {index <= rating ? (
                  <i className='fa-solid fa-star'></i>
                ) : (
                  <i className='fa-regular fa-star'></i>
                )}
              </span>
            ))}
          </div>

          <button onClick={handleSubmit} className='submit'>
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default RateP
