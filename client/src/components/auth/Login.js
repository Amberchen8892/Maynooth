import React, { Fragment, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../layout/Message';
import Loader from '../layout/Loader';
import { login } from '../../actions/userActions';

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search
    ? location.search.split('=')[1]
    : '/products';
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
      console.log(
        userInfo.name
          .split(' ')
          .map(function (item) {
            return item[0];
          })
          .join('')
      );
    }
  }, [history, redirect, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    console.log(userInfo);
  };
  return (
    <Fragment>
      <div
        className='container'
        style={{ marginTop: '3rem', marginBottom: '3rem' }}
      >
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <div className='row' style={{ borderBottom: '1px solid black' }}>
          <h3>SIGN IN OR CREATE AN ACCOUNT</h3>
        </div>
        <div className='row' style={{ marginTop: '2rem' }}>
          <div className='col-md-6' style={{ padding: '1rem' }}>
            <h4> New around here?</h4>
            <p>Sign up here to...</p>
            <ul>
              <li>Make your check out speedy</li>
              <li>View your orders</li>
              <li>Save multiple shipping address</li>
            </ul>
            <Link
              tto={redirect ? `/register?redirect=${redirect}` : '/register'}
              type='button'
              class='btn btn-dark'
            >
              Create Your Account Here
            </Link>
          </div>
          <div
            className='col-md-6'
            style={{ borderLeft: '1px solid black', padding: '1rem' }}
          >
            <h4>ALREADY REGISTERED?</h4>
            <p>If you have an account with us, please sign in.</p>
            <form onSubmit={submitHandler}>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>
                  Email<span style={{ color: 'red' }}>*</span>
                </label>
                <div className='col-sm-10'>
                  <input
                    type='email'
                    value={email}
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <label
                  htmlFor='inputPassword'
                  className='col-sm-2 col-form-label'
                >
                  Password<span style={{ color: 'red' }}>*</span>
                </label>
                <div className='col-sm-10'>
                  <input
                    type='password'
                    className='form-control'
                    id='inputPassword'
                    placeholder='enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <small id='emailHelp' class='form-text text-muted'>
                    <span style={{ color: 'red' }}>*</span> is required
                  </small>
                </div>
              </div>
              <button type='submit' class='btn  btn-dark'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
