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

  const toastSuccess = () => {
    toast.success('Rating submitted Succesfully!!', {
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
  const toastError = data => {
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

        if (response.ok) {
          toastSuccess()
          const handleWhatsAppShare = async () => {

            let feedbackMessage = "";

            switch (rating) {
              case 1:
                feedbackMessage = "Oh no! 😞 Your feedback is crucial, and I appreciate your honesty. Let me know how I can improve.";
                break;
              case 2:
                feedbackMessage = "Thank you for your feedback. I see there's room for improvement. Your insights are valuable!";
                break;
              case 3:
                feedbackMessage = "Appreciate your feedback! It helps me understand what's working and what I can enhance.";
                break;
              case 4:
                feedbackMessage = "Fantastic! 🌟 Your positive feedback inspires me to keep delivering quality work.";
                break;
              case 5:
                feedbackMessage = "Wow! 🎉 Your rating of 5 has lit up my day, and your support means the world. Thank you!";
                break;
              default:
                feedbackMessage = "Your support means the world.🌍";
                break;
            }

            const message = `
  *🎉🎉 THANK YOU FOR YOUR FEEDBACK | GVK 🎉📢*

  *From GANTA VENKATA KOUSIK*

Hello there! 👋  
Big thanks for sharing your thoughts on my work! 🙌 

*you have given a rating of ${rating}*
*${feedbackMessage}*
            
Your feedback is like a compass *guiding me toward even better creations* in the future. 🚀
      
*Message from GVK* 📢:
            
Let's keep the conversation flowing! 🌐 *Don't hesitate to drop a message if you have more ideas or suggestions*. Excited for the amazing collaborations ahead! 🤝
            
Follow me on *my social media* for the latest updates:  
    - *LinkedIn: [Venkata Kousik](https://www.linkedin.com/in/venkatakousik/)*  
    - *Gmail: venkatakousikcse01@gmail.com*  
    - *GitHub: [GantaVenkataKousik](https://github.com/GantaVenkataKousik)*
            
📞 Contact: +91 9441527402
            
*Warm regards, GVK (GANTA VENKATA KOUSIK)🙌🌟*
        `

            try {
              if (navigator.share) {
                await navigator
                  .share({
                    title: '🎉GVK Portfilo Feedback Appreciation🙌',
                    text: message
                  })
                  .then(() => console.log('Successful share'))
                  .catch(error => console.log('Error in sharing', error))
              } else {
                console.log(`System does not support sharing text messages.`)

                const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
                  message
                )}`
                window.open(whatsappURL, '_blank')
              }
            } catch (error) {
              console.error('Error creating and sharing text file:', error)

              const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
                message
              )}`
              window.open(whatsappURL, '_blank')
            }
          }

          handleWhatsAppShare()
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
