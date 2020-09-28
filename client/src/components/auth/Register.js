import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('password', password);
    console.log('password2', password2);
    if (password !== password2) {
      setAlert('passwors are not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };
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
          <h3>CREATE AN ACCOUNT</h3>
          <small style={{ paddingLeft: '1rem', color: '#A6ABAB' }}>
            Mandatory fields *
          </small>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='form-group row'>
              <label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
                Name <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  name='name'
                  value={name}
                  className='form-control'
                  placeholder='enter your full name'
                  style={{ width: '50%' }}
                  onChange={(e) => onChange(e)}
                  // required
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
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='enter your email'
                  style={{ width: '50%' }}
                  // required
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
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  id='inputPassword'
                  // minLength='6'
                  placeholder='password has at least 6 characters'
                  style={{ width: '50%' }}
                  // required
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>
                Re-enter Password <span style={{ color: 'red' }}>*</span>
              </label>
              <div className='col-sm-10'>
                <input
                  type='password'
                  name='password2'
                  value={password2}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  id='inputPassword'
                  // minLength='6'
                  placeholder='re-enter password'
                  style={{ width: '50%' }}
                  // required
                />
              </div>
            </div>
            <button type='submit' className='btn  btn-dark'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};
export default connect(null, { setAlert, register })(Register);
