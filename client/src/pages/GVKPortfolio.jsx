import React, { useEffect } from 'react';
import Animations from '../components/Animations.jsx';
import Page from './Page.jsx';
import '../styles/style.css';
import '../styles/responsive.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { Analytics } from "@vercel/analytics/react"
export default function GVKPortfolio() {


    useEffect(() => {
        if (window.innerWidth < 500) {
            return;
        }

        toast.success('Thank you for visiting my Portfolio🎉🎉🎉', {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            style: {
                fontWeight: 'bold',
                fontSize: '2rem',
            },
        });

    }, []);


    return (
        <>        <Analytics />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                className={toast}
            />
            <Page />
        </>
    );
}
