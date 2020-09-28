import React, { Fragment } from 'react';

const Admin = () => {
  return (
    <Fragment>
      <div
        className='container'
        style={{ marginTop: '3rem', marginBottom: '3rem' }}
      >
        <div
          className='row'
          style={{
            borderBottom: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3>CREATE AN ADMIN ACCOUNT</h3>
          <small style={{ paddingLeft: '1rem', color: '#A6ABAB' }}>
            Mandatory fields *
          </small>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <form>
            <div className='form-group row'>
              <label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
                Name <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter your full name'
                  style={{ width: '50%' }}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
                Email <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='col-sm-10'>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='enter your email'
                  style={{ width: '50%' }}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label
                htmlFor='inputPassword'
                className='col-sm-2 col-form-label'
              >
                Password <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='col-sm-10'>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword'
                  placeholder='password has at least 6 characters'
                  style={{ width: '50%' }}
                />
              </div>
            </div>
            <button type='submit' class='btn  btn-dark'>
              Register
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default Admin;
