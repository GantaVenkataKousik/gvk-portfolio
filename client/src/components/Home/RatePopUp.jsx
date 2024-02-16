// ScrollDown.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useToasts } from 'react-toast-notifications';

const RatePopup = () => {
    const [emailEntered, setEmailEntered] = useState(false);
    const [rating, setRating] = useState(0);
    const { addToast } = useToasts();
    const [isComponentVisible, setComponentVisible] = useState(true);



    const handleEmailChange = (e) => {
        setEmailEntered(e.target.value.trim() !== ''); // Check if the email input is not empty
    };

    const handleStarHover = (starRating) => {
        if (!rating && emailEntered) {
            setRating(starRating);
        }
    };

    const handleStarClick = (starRating) => {
        setRating(starRating);
    };

    const handlePopupToggle = () => {
        setComponentVisible(!isComponentVisible);
    };

    const ratePopAfterClick = () => {
        setComponentVisible(false);
    };

    const handleClick = async (starRating) => {
        try {
            console.log(starRating, emailEntered);
            const response = await fetch('https://gvk-portfolio-api.vercel.app/rating', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailEntered, rating: starRating }),
            });

            if (response.ok) {
                toastSuccess();
            } else {
                console.error('Unexpected response from the server');
            }
        } catch (error) {
            console.error('Error sending rating:', error);
        }
    }


    const styling = {
        fontSize: '1rem',
        cursor: 'pointer',
    };

    const toastSuccess = () => {
        addToast('Thanks for rating!!', {
            appearance: 'success',
            autoDismiss: true,
        });
    };

    const getStarIcon = (index) => {
        if (rating >= index) {
            return <i className="fa-solid fa-star"></i>;
        } else {
            return <i className="fa-regular fa-star"></i>;
        }
    };

    const getRatingText = () => {
        if (rating === 0) {
            return 'Not Rated';
        } else if (rating === 1) {
            return 'Not Good';
        } else if (rating === 2) {
            return 'Needs Improvement';
        } else if (rating === 3) {
            return 'Good';
        } else if (rating === 4) {
            return 'Excellent';
        } else {
            return 'Marvellous';
        }
    };



    return (
        <>
            {isComponentVisible && (

                <div className="rate_pop" id="ratePopupSection">
                    <div className='inside_rate_pop'>

                        <span className="rate_pop_after" onClick={ratePopAfterClick}>+</span>
                        <div className="rate_pop">
                            <div className={`rate_popup ${emailEntered ? 'email-entered' : ''}`}>
                                <div className="user_Data">
                                    <input
                                        type="text"
                                        placeholder="Enter email"
                                        onChange={handleEmailChange}
                                    ></input>
                                </div>

                                <div className="rate_popup_content">
                                    <h3>Rate my work</h3>

                                </div>

                                <div className="rate_popup_close">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <span
                                            key={index}
                                            onMouseEnter={() => handleStarHover(index)}
                                            onMouseOver={() => handleStarClick(index)}
                                            onClick={() => { handleClick(index) }}
                                            style={styling}
                                        >
                                            {getStarIcon(index)}
                                        </span>
                                    ))}
                                </div>

                                <p className='rating_text' style={{ color: 'white' }}>{getRatingText()}</p>
                            </div>
                        </div>
                    </div>

                </div>
            )}


        </>

    );
};

export default RatePopup;
