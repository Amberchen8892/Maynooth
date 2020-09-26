import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div
        className='section-6'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          backgroundColor: '#eeeeee',
          height: '15rem',
          marginBottom: '2rem',
        }}
      >
        <div className='input-group mb-3' style={{ width: '60vw' }}>
          <input
            type='text'
            className='form-control'
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
          />
          <div className='input-group-append'>
            <button
              className='btn btn btn-dark'
              type='button'
              id='button-addon2'
            >
              Button
            </button>
          </div>
        </div>
        <div>
          <h3>Follow us on social</h3>
        </div>
        <div>
          <span style={{ padding: '10px' }}>
            <i class='fab fa-facebook'></i>
          </span>
          <span style={{ padding: '10px' }}>
            <i class='fab fa-github'></i>
          </span>
          <span style={{ padding: '10px' }}>
            <i class='fab fa-twitter'></i>
          </span>
          <span style={{ padding: '10px' }}>
            <i class='fab fa-instagram-square'></i>
          </span>
        </div>
      </div>
      <div className=' container section-7' style={{ marginBottom: '1rem' }}>
        <div>
          <h4>Shopping With Us</h4>
          <p>Covid-19 - stores reopening</p>
          <p>Store Locator</p>
          <p>My Account</p>
          <p>Delivery & Returns</p>
          <p>Maynooth For Business</p>
          <p>Terms & Conditions</p>
        </div>
        <div style={{ paddingLeft: '2rem', borderLeft: '1px solid #e0e0e0' }}>
          <h4>Have A Question</h4>
          <p>Covid-19 FAQs</p>
          <p>Contact Us</p>
          <p>Help</p>
          <p>Buying guides</p>
          <p>About Our Product Reviews</p>
          <p>Privacy Hub</p>
          <p>Cookie Settings</p>
        </div>
        <div style={{ paddingLeft: '2rem', borderLeft: '1px solid #e0e0e0' }}>
          <h4> About Maynooth</h4>
          <p>Blog</p>
          <p>Our Heritage</p>
          <p>Our Story</p>
          <p>Press Centre</p>
          <p>WEEE Recycling</p>
        </div>
        <div style={{ paddingLeft: '2rem', borderLeft: '1px solid #e0e0e0' }}>
          <h4>Join Us</h4>
          <p>Newsletter Sign Up</p>
          <p>Careers</p>
          <p>Affiliates</p>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          width: '100vw',
          height: '4rem',
          backgroundColor: '#eeeeee',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>All Rights Reserved.</p>
      </div>
    </Fragment>
  );
};
export default Footer;
