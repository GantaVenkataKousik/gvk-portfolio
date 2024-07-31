import React from 'react';
import { Link } from 'react-scroll';

const Download = () => {
  const handleDownload = () => {
    const url = '/documents/GVK_Resume.pdf';
    const encodedUrl = encodeURI(url); // Encode the URL

    const link = document.createElement('a');
    link.href = encodedUrl;
    link.target = '_blank';
    link.download = 'GVK_Resume.pdf';

    link.addEventListener('error', (event) => {
      console.error('Error occurred while downloading PDF:', event);
    });

    link.click();
  };
  return (
    <div className="button-section">
      <button className='contactme'>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="button button--flex main-btn"
          style={{ whiteSpace: 'nowrap', fontSize: 'inherit' }}
        >
          Contact Me <i className="uil uil-message button__icon"></i>
        </Link>
      </button>

      <button
        onClick={handleDownload}
        className="button button--flex main-btn"
        style={{ whiteSpace: 'nowrap', fontSize: 'inherit' }}
      >
        My CV <i className="uil uil-download-alt button__icon"></i>
      </button>
    </div>
  );
};

export default Download;
