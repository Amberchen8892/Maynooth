import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { NavDropdown, Container, Nav } from 'react-bootstrap';
import { logout } from '../../actions/userActions';

const Navbar = ({ history }) => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  const logoutHandler = () => {
    dispatch(logout());
    history.push('/login');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/products');
    }
  };

  return (
    <Fragment>
      <div id='content-desktop'>
        <nav
          className='navbar navbar-light bg-dark'
          style={{ paddingRight: '100px', paddingLeft: '100px' }}
        >
          <span className='navbar-brand mb-0 h1' style={{ color: 'white' }}>
            <Link to='/' className='link-navbar'>
              <span
                style={{
                  fontSize: '2rem',
                  color: '#f8961e',
                  fontWeight: 'bolder',
                }}
              >
                M
              </span>
              <span style={{ color: 'white', fontWeight: 'bold' }}>AY</span>
              <spna style={{ color: '#2ec4b6', fontWeight: 'bold' }}>N</spna>
              <span style={{ color: 'white', fontWeight: 'bold' }}>OOT</span>
              <span style={{ color: '#9b5de5', fontWeight: 'bold' }}>H</span>
            </Link>
          </span>
          <form className='form-inline my-2 my-lg-0' onSubmit={submitHandler}>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>

          <ul className='nav justify-content-end'>
            <li className='nav-item'>
              <Link className='nav-link hover-nav' to='/cart'>
                <i className='fas fa-shopping-cart'></i>
                Cart
              </Link>
            </li>
            {userInfo && userInfo.isAdmin ? (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <li className='nav-item'>
                <Link className='nav-link hover-nav' to='/login'>
                  <i className='fas fa-user'></i>
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <ul
          className='shadow sub-nav'
          style={{ listStyleType: 'none', width: '100vw', height: '3rem' }}
        >
          <div
            className='container'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black', fontWeight: 'bolder' }}
              >
                <span
                  style={{
                    border: '1px solid white',
                    width: '30px',
                    padding: '5px',
                    borderTopRightRadius: '30%',
                    borderBottomLeftRadius: '30%',
                    backgroundColor: '#49b2ea',
                    backgroundImage:
                      'linear-gradient(90deg, #49b2ea 0%, #80d0ca 100%)',
                  }}
                >
                  {' '}
                  New
                </span>
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'>
                  <div className='  row'>
                    <div className=' col-sm'>
                      <div className='sub-title'>
                        <h3>New In</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Sofa</p>
                        <p>Bed Room</p>
                        <p>Living Room</p>
                        <p>Dinning Room</p>
                        <p>Lighting</p>
                        <p>Rugs</p>
                        <p>Beding</p>
                        <p>Kitchen</p>
                      </div>
                    </div>
                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3>Trends</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Back in Stock</p>
                        <p>Bestsellers</p>
                        <p>Pieces under £100</p>
                        <p>Jungle</p>
                        <p>Monochrome</p>
                        <p>Curves</p>
                        <p>Small space living</p>
                        <p>Natural materials</p>
                      </div>
                    </div>
                    <div className='col-sm'>
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                          className='card-img'
                          alt='...'
                          style={{ height: '300px' }}
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1595431803521-bffc05ea8981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off sub-text test-a'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black' }}
              >
                Furniture
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'>
                  <div className='  row'>
                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3>Living Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bookcases & shelving</p>
                        <p>Coffee tables</p>
                        <p>Console tables</p>
                        <p>Pouffes & footstools</p>
                        <p>Side tables</p>
                        <p>Sofas & armchairs</p>
                        <p>TV stands & units</p>
                        <p>Home Office & Study</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Desks</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Office accessories</p>
                        <p>Office chairs</p>
                        <p>Office storage</p>
                      </div>
                    </div>

                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3> Dining Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bar stools</p>
                        <p>Chairs & benches</p>
                        <p>Dining sets</p>
                        <p>Dining tables</p>
                        <p>Side tables</p>
                        <p>Extendable dining tables</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Storage Furniture</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bathroom storage</p>
                        <p>Bookcases & shelving</p>
                        <p>Cupboards</p>
                        <p>Dining room cabinets</p>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1121&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black' }}
              >
                Soft Furnishings
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'>
                  <div className='  row'>
                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3>Living Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bookcases & shelving</p>
                        <p>Coffee tables</p>
                        <p>Console tables</p>
                        <p>Pouffes & footstools</p>
                        <p>Side tables</p>
                        <p>Sofas & armchairs</p>
                        <p>TV stands & units</p>
                        <p>Home Office & Study</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Desks</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Office accessories</p>
                        <p>Office chairs</p>
                        <p>Office storage</p>
                      </div>
                    </div>

                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3> Dining Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bar stools</p>
                        <p>Chairs & benches</p>
                        <p>Dining sets</p>
                        <p>Dining tables</p>
                        <p>Side tables</p>
                        <p>Extendable dining tables</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Storage Furniture</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bathroom storage</p>
                        <p>Bookcases & shelving</p>
                        <p>Cupboards</p>
                        <p>Dining room cabinets</p>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1121&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black' }}
              >
                Lighting
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'></div>
                <div className='  row'>
                  <div className='col-sm'>
                    <div className='sub-title'>
                      <h3>Living Room</h3>
                    </div>
                    <div className='text-sub'>
                      <p>Bookcases & shelving</p>
                      <p>Coffee tables</p>
                      <p>Console tables</p>
                      <p>Pouffes & footstools</p>
                      <p>Side tables</p>
                      <p>Sofas & armchairs</p>
                      <p>TV stands & units</p>
                      <p>Home Office & Study</p>
                    </div>
                    <div className='sub-title'>
                      <h3>Desks</h3>
                    </div>
                    <div className='text-sub'>
                      <p>Office accessories</p>
                      <p>Office chairs</p>
                      <p>Office storage</p>
                    </div>
                  </div>

                  <div className='col-sm'>
                    <div className='sub-title'>
                      <h3> Dining Room</h3>
                    </div>
                    <div className='text-sub'>
                      <p>Bar stools</p>
                      <p>Chairs & benches</p>
                      <p>Dining sets</p>
                      <p>Dining tables</p>
                      <p>Side tables</p>
                      <p>Extendable dining tables</p>
                    </div>
                    <div className='sub-title'>
                      <h3>Storage Furniture</h3>
                    </div>
                    <div className='text-sub'>
                      <p>Bathroom storage</p>
                      <p>Bookcases & shelving</p>
                      <p>Cupboards</p>
                      <p>Dining room cabinets</p>
                      <p></p>
                    </div>
                  </div>

                  <div
                    className='col-sm'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div className='card bg-dark text-white'>
                      <img
                        src='https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80'
                        className='card-img'
                        alt='...'
                      />
                      <div className='card-img-overlay'>
                        <h5
                          className='card-title'
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                          }}
                        >
                          Shop now
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-sm'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div className='card bg-dark text-white'>
                      <img
                        src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1121&q=80'
                        className='card-img'
                        alt='...'
                      />
                      <div className='card-img-overlay'>
                        <h5
                          className='card-title'
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                          }}
                        >
                          Shop now
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black' }}
              >
                Accessories
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'>
                  <div className='  row'>
                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3>Living Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bookcases & shelving</p>
                        <p>Coffee tables</p>
                        <p>Console tables</p>
                        <p>Pouffes & footstools</p>
                        <p>Side tables</p>
                        <p>Sofas & armchairs</p>
                        <p>TV stands & units</p>
                        <p>Home Office & Study</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Desks</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Office accessories</p>
                        <p>Office chairs</p>
                        <p>Office storage</p>
                      </div>
                    </div>

                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3> Dining Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bar stools</p>
                        <p>Chairs & benches</p>
                        <p>Dining sets</p>
                        <p>Dining tables</p>
                        <p>Side tables</p>
                        <p>Extendable dining tables</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Storage Furniture</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bathroom storage</p>
                        <p>Bookcases & shelving</p>
                        <p>Cupboards</p>
                        <p>Dining room cabinets</p>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1121&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black' }}
              >
                Kitchen
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'>
                  <div className='  row'>
                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3>Living Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bookcases & shelving</p>
                        <p>Coffee tables</p>
                        <p>Console tables</p>
                        <p>Pouffes & footstools</p>
                        <p>Side tables</p>
                        <p>Sofas & armchairs</p>
                        <p>TV stands & units</p>
                        <p>Home Office & Study</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Desks</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Office accessories</p>
                        <p>Office chairs</p>
                        <p>Office storage</p>
                      </div>
                    </div>

                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3> Dining Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bar stools</p>
                        <p>Chairs & benches</p>
                        <p>Dining sets</p>
                        <p>Dining tables</p>
                        <p>Side tables</p>
                        <p>Extendable dining tables</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Storage Furniture</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bathroom storage</p>
                        <p>Bookcases & shelving</p>
                        <p>Cupboards</p>
                        <p>Dining room cabinets</p>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1121&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black' }}
              >
                Offer
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'>
                  <div className='  row'>
                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3>Living Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bookcases & shelving</p>
                        <p>Coffee tables</p>
                        <p>Console tables</p>
                        <p>Pouffes & footstools</p>
                        <p>Side tables</p>
                        <p>Sofas & armchairs</p>
                        <p>TV stands & units</p>
                        <p>Home Office & Study</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Desks</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Office accessories</p>
                        <p>Office chairs</p>
                        <p>Office storage</p>
                      </div>
                    </div>

                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3> Dining Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bar stools</p>
                        <p>Chairs & benches</p>
                        <p>Dining sets</p>
                        <p>Dining tables</p>
                        <p>Side tables</p>
                        <p>Extendable dining tables</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Storage Furniture</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bathroom storage</p>
                        <p>Bookcases & shelving</p>
                        <p>Cupboards</p>
                        <p>Dining room cabinets</p>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1121&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off '
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black' }}
              >
                Inspiration
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'>
                  <div className='  row'>
                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3>Living Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bookcases & shelving</p>
                        <p>Coffee tables</p>
                        <p>Console tables</p>
                        <p>Pouffes & footstools</p>
                        <p>Side tables</p>
                        <p>Sofas & armchairs</p>
                        <p>TV stands & units</p>
                        <p>Home Office & Study</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Desks</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Office accessories</p>
                        <p>Office chairs</p>
                        <p>Office storage</p>
                      </div>
                    </div>

                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3> Dining Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bar stools</p>
                        <p>Chairs & benches</p>
                        <p>Dining sets</p>
                        <p>Dining tables</p>
                        <p>Side tables</p>
                        <p>Extendable dining tables</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Storage Furniture</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bathroom storage</p>
                        <p>Bookcases & shelving</p>
                        <p>Cupboards</p>
                        <p>Dining room cabinets</p>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1121&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item dropdown' style={{ position: 'initial' }}>
              <a
                className='nav-link dropdown-toggle caret-off'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'black' }}
              >
                Sofa & Armchairs
              </a>
              <div className='dropdown-menu' style={{ width: '100vw' }}>
                <div className='container'>
                  <div className='  row'>
                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3>Living Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bookcases & shelving</p>
                        <p>Coffee tables</p>
                        <p>Console tables</p>
                        <p>Pouffes & footstools</p>
                        <p>Side tables</p>
                        <p>Sofas & armchairs</p>
                        <p>TV stands & units</p>
                        <p>Home Office & Study</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Desks</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Office accessories</p>
                        <p>Office chairs</p>
                        <p>Office storage</p>
                      </div>
                    </div>

                    <div className='col-sm'>
                      <div className='sub-title'>
                        <h3> Dining Room</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bar stools</p>
                        <p>Chairs & benches</p>
                        <p>Dining sets</p>
                        <p>Dining tables</p>
                        <p>Side tables</p>
                        <p>Extendable dining tables</p>
                      </div>
                      <div className='sub-title'>
                        <h3>Storage Furniture</h3>
                      </div>
                      <div className='text-sub'>
                        <p>Bathroom storage</p>
                        <p>Bookcases & shelving</p>
                        <p>Cupboards</p>
                        <p>Dining room cabinets</p>
                        <p></p>
                      </div>
                    </div>

                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className='card bg-dark text-white'>
                        <img
                          src='https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1121&q=80'
                          className='card-img'
                          alt='...'
                        />
                        <div className='card-img-overlay'>
                          <h5
                            className='card-title'
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                            }}
                          >
                            Shop now
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div id='content-mobile'>
        <header className='header'>
          <div className='brand'>
            <button style={{ fontSize: '1.5rem' }} onClick={openMenu}>
              &#9776;
            </button>
            <a href='index.html' style={{ fontSize: '1.5rem' }}>
              Maynooth
            </a>
          </div>
          <div className='mobile-nav'>
            <Nav className='justify-content-end' activeKey='/home'>
              <Nav.Item>
                <Nav.Link href='/cart'>
                  <i
                    style={{ color: 'white' }}
                    className='fas fa-shopping-cart'
                  ></i>{' '}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {userInfo && userInfo.isAdmin ? (
                  <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : userInfo ? (
                  <NavDropdown
                    title={userInfo.name
                      .split(' ')
                      .map(function (item) {
                        return item[0];
                      })
                      .join('')}
                    id='username'
                  >
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <li className='nav-item'>
                    <Link className='nav-link hover-nav' to='/login'>
                      <i className='fas fa-user'></i>
                    </Link>
                  </li>
                )}
              </Nav.Item>
            </Nav>
          </div>
        </header>

        <aside className='sidebar'>
          <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
            Shopping Categories
          </h3>
          <button className='sidebar-close-button' onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              {' '}
              <a href='/products' style={{ color: 'black' }}>
                New
              </a>
            </li>
            <li>
              <a href='/products' style={{ color: 'black' }}>
                Furniture
              </a>
            </li>
            <li>
              <a href='/products' style={{ color: 'black' }}>
                Soft Furnishings
              </a>
            </li>
            <li>
              <a href='/products' style={{ color: 'black' }}>
                Lighting
              </a>
            </li>
            <li>
              <a href='/products' style={{ color: 'black' }}>
                Accessories
              </a>
            </li>
            <li>
              <a href='/products' style={{ color: 'black' }}>
                Kitchen
              </a>
            </li>
            <li>
              <a href='/products' style={{ color: 'black' }}>
                Offer
              </a>
            </li>
            <li>
              <a href='/products' style={{ color: 'black' }}>
                Sofa and Armchair
              </a>
            </li>
            <li>
              <a href='/products' style={{ color: 'black' }}>
                Inspriration
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <div className='row' style={{ marginTop: '15px', height: '3rem' }}>
        <div
          className='col'
          style={{
            borderRight: '1px solid #eeeeee',
            borderBottom: '1px solid #eeeeee',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              paddingTop: '0.5rem',
              fontSize: '14px',
              fontFamily: 'Playfair, sans-serfif',
              color: 'black',
              marginTop: '0.3rem',
            }}
          >
            {' '}
            SIGN UP TO OUR NEWSLETTER FOR $10 OFF $75
          </p>
        </div>
        <div
          className='col'
          style={{
            borderRight: '1px solid #eeeeee',
            borderBottom: '1px solid #eeeeee',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '0.5rem',
            }}
          >
            <span
              style={{
                marginTop: '0.3rem',
                fontSize: '14px',
                fontFamily: 'Playfair, sans-serfif',
                color: 'black',
              }}
            >
              {' '}
              <i className='fas fa-truck'></i>
            </span>{' '}
            <p
              style={{
                marginTop: '0.3rem',
                marginLeft: '1rem',
                fontSize: '14px',
                fontFamily: 'Playfair, sans-serfif',
                color: 'black',
              }}
            >
              FREE DELIVERY FOR ORDERS OVER $50
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default withRouter(Navbar);
