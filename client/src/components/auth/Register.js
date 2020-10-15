import React, { Fragment, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../layout/Message';
import Loader from '../layout/Loader';
import { register } from '../../actions/userActions';

const Register = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    }
    // dispatch register
    dispatch(register(name, email, password));
  };
  return (
    <Fragment>
      <div
        className='container'
        style={{ marginTop: '3rem', marginBottom: '3rem' }}
      >
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
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
          <form onSubmit={registerHandler}>
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              Register
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
