import React from 'react';
import { Link } from 'react-scroll';

const Download = () => {
  const handleDownload = () => {
    const url = '/documents/GVK-Resume.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'GVK.pdf';
    link.click();
  };
  return (
    <div className="button-section">
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="button button--flex main-btn"
        style={{ whiteSpace: 'nowrap', fontSize: 'inherit' }}
      >
        Contact Me <i className="uil uil-message button__icon"></i>
      </Link>
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
