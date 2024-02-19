
// import React, { useState } from 'react';
import ScrollUpButton from './Footer/ScrollUpButton';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Footer() {

    const toastSuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const toastError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://gvk-portfolio-api1.onrender.com/subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                toastSuccess('Thanks for Subscribing!');
            }
            else {
                toastError('Check your Network!!');
            }

        } catch (error) {
            toastError('Unknown Error Occurred!!');
        }
    };

    return (
        <>
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="footer-container container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div
                                    className="f_widget company_widget wow fadeInLeft"
                                    data-wow-delay="0.2s"
                                >
                                    <h3 className="f-title f_600 t_color f_size_18">
                                        <span className="highlight">Get in Touch</span>
                                    </h3>
                                    <form
                                        onSubmit={handleSubmit}
                                        action="#"
                                        className="f_subscribe_two mailchimp"
                                        method="post"
                                        noValidate={true}
                                    >
                                        <input
                                            type="text"
                                            name="EMAIL"
                                            onChange={handleEmailChange}
                                            className="form-control memail"
                                            placeholder="Email"
                                        />
                                        <button
                                            className="btn btn_get btn_get_two"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                        <p
                                            className="mchimp-errmessage"
                                            style={{ display: 'none' }}
                                        ></p>
                                        <p
                                            className="mchimp-sucmessage"
                                            style={{ display: 'none' }}
                                        ></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div
                                    className="f_widget about-widget pl_70 wow fadeInLeft"
                                    data-wow-delay="0.4s"
                                >
                                    <h3 className="f-title f_600 t_color f_size_18">
                                        <span className="highlight">Download</span>
                                    </h3>
                                    <ul className="list-unstyled f_list">
                                        <li>
                                            <a href="projects">Projects</a>
                                        </li>
                                        <li>
                                            <a href="about">portfolio</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div
                                    className="f_widget about-widget pl_70 wow fadeInLeft"
                                    data-wow-delay="0.6s"
                                >
                                    <h3 className="f-title f_600 t_color f_size_18">
                                        <span className="highlight">Help</span>
                                    </h3>
                                    <ul className="list-unstyled f_list">
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Term &amp; conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Reporting</a>
                                        </li>
                                        <li>
                                            <a href="#">Documentation</a>
                                        </li>
                                        <li>
                                            <a href="#">Support </a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div
                                    className="f_widget social-widget pl_70 wow fadeInLeft"
                                    data-wow-delay="0.8s"
                                >
                                    <h3 className="f-title f_600 t_color f_size_18">
                                        <span className="highlight">Follow me on</span>
                                    </h3>
                                    <div className="f_social_icon footer-follow-icons">
                                        <a href="#" className="fab fa-facebook"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-linkedin"></a>
                                        <a href="#" className="fab fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400 copyright highlight">
                                    GVK 2024 ©All rights reserved.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p className="highlight">
                                    Made with <i className="fa-solid fa-heart"></i> by{' '}
                                    <a
                                        href="http://cakecounter.com"
                                        target="_blank "
                                    >
                                        <span className="copyright"></span>GVK
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollUpButton />
        </>

    );
};
