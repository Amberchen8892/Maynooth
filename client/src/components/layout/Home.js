import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Fragment>
      <div
        id='carouselExampleCaptions'
        className='container carousel slide'
        data-ride='carousel'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3rem',
        }}
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleCaptions'
            data-slide-to={0}
            className='active'
          />
          <li data-target='#carouselExampleCaptions' data-slide-to={1} />
          <li data-target='#carouselExampleCaptions' data-slide-to={2} />
        </ol>
        <div className='carousel-inner' style={{ width: '100vw' }}>
          <div className='carousel-item active'>
            <img
              src='https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
              className='d-block w-100 '
              alt='...'
              style={{ height: '500px' }}
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5 style={{ color: '#054564', fontWeight: 'bold' }}>
                BEDS AND MATRESSES
              </h5>
              <p
                style={{ color: '#2A4759', fontFamily: 'Playfair, san-serif' }}
              >
                Everyone is different, yet the same. We all have different
                sleeping preferences{' '}
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
              className='d-block w-100'
              alt='...'
              style={{ height: '500px' }}
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5 style={{ color: '#054564', fontWeight: 'bold' }}>
                LIVING ROOM
              </h5>
              <p
                style={{ color: '#2A4759', fontFamily: 'Playfair, san-serif' }}
              >
                Most of us collect things that we love to see every day.{' '}
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://images.unsplash.com/photo-1596205250168-c3583813eea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
              className='d-block w-100'
              alt='...'
              style={{ height: '500px' }}
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5 style={{ color: '#054564', fontWeight: 'bold' }}>KITCHEN</h5>
              <p
                style={{ color: '#2A4759', fontFamily: 'Playfair, san-serif' }}
              >
                Get a new look for your kitchen.
              </p>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleCaptions'
          role='button'
          data-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleCaptions'
          role='button'
          data-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
      <div className='container section-1' style={{ marginTop: '60px' }}>
        <Row className='container' style={{ textAlign: 'center' }}>
          <Col xs={12} md={4}>
            <div>
              <i class='fas fa-pencil-ruler fa-3x icon-circle'></i>
              <h3 style={{ marginTop: '0.5rem' }}>ORGIGINAL DESIGN</h3>
              <p>from our in-house designers</p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <i class='fas fa-truck-moving fa-3x  icon-circle'></i>
              <h3 style={{ marginTop: '0.5rem' }}>FREE DELIVERY</h3>
              <p>on 100's of lines</p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <i class='fas fa-crown fa-3x  icon-circle'></i>
              <h3 style={{ marginTop: '0.5rem' }}>HABITAT HERIATGE</h3>
              <p>55 years of inovation</p>
            </div>
          </Col>
        </Row>
      </div>

      <div className='container'>
        {' '}
        <hr className='my-4'></hr>
      </div>

      <div className=' container section-2' style={{ marginBottom: '2rem' }}>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '28rem' }}
        >
          <img
            src='https://images.unsplash.com/photo-1589719470769-08aa42145d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '18rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Get Served
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Must have dining furniture
            </p>
            <a href='#' className='btn btn-outline-dark'>
              SHOP DINNING ROOM
            </a>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '28rem' }}
        >
          <img
            src='https://images.unsplash.com/photo-1532431967313-f89e1b92f8f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '18rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Fit For Feasts
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Instagram worthy-dinnerware
            </p>
            <a href='#' className='btn btn-outline-dark'>
              SHOP DINNERWARE
            </a>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '28rem' }}
        >
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner' style={{ width: '18rem' }}>
              <div className='carousel-item active'>
                <img
                  src='https://images.unsplash.com/photo-1534353641488-754bfb2d6cd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                  className='d-block '
                  alt='...'
                  style={{ width: '99%', height: '28rem' }}
                />
                <div class='carousel-caption d-none d-md-block'>
                  <p
                    style={{ color: 'white', textDecorationLine: 'underline' }}
                  >
                    SHOP NOW
                  </p>
                </div>
              </div>
              <div className='carousel-item'>
                <img
                  src='https://images.unsplash.com/photo-1515877131530-5693bde51d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                  className='d-block'
                  alt='...'
                  style={{ width: '99%', height: '28rem' }}
                />
                <div class='carousel-caption d-none d-md-block'>
                  <p
                    style={{ color: 'black', textDecorationLine: 'underline' }}
                  >
                    SHOP NOW
                  </p>
                </div>
              </div>
              <div className='carousel-item'>
                <img
                  src='https://images.unsplash.com/photo-1515948725-edac7b5bb0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                  className='d-block '
                  alt='...'
                  style={{ width: '99%', height: '28rem' }}
                />
                <div class='carousel-caption d-none d-md-block'>
                  <p
                    style={{ color: 'white', textDecorationLine: 'underline' }}
                  >
                    SHOP NOW
                  </p>
                </div>
              </div>
            </div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
              stle={{ color: 'green' }}
            >
              <span
                className='carousel-control-prev-icon section-2-control'
                aria-hidden='true'
                stle={{ color: 'green' }}
              />
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon section-2-control'
                aria-hidden='true'
              />
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className='container section-3' style={{ marginTop: '4rem' }}>
        <div className='row'>
          <div className='col-md-8'>
            <div
              className='card bg-dark text-white text-right'
              style={{ height: '18rem' }}
            >
              <img
                src='https://images.unsplash.com/photo-1547822281-6e954371f3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
                className='card-img'
                alt='...'
                style={{ height: '18rem' }}
              />
              <div className='card-img-overlay'>
                <h5 className='card-title'>Catch Some Zzzz</h5>
                <p
                  className='card-text'
                  style={{ fontSize: '12px', textDecoration: 'underline' }}
                >
                  SHOP BEDDING
                </p>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div
              className='card bg-dark text-white text-right'
              style={{ height: '18rem' }}
            >
              <img
                src='https://images.unsplash.com/flagged/photo-1575517111839-3a3843ee7f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                className='card-img'
                alt='...'
                style={{ height: '18rem' }}
              />
              <div className='card-img-overlay'>
                <h5 className='card-title'>LIE IN LONGER</h5>
                <p
                  className='card-text'
                  style={{ fontSize: '12px', textDecoration: 'underline' }}
                >
                  SHOP BEDROOM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' container section-4'>
        <hr className='my-4' />
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          We think you will like...
        </h2>
        {/*Carousel Wrapper*/}
        <div
          id='multi-item-example'
          className='carousel slide carousel-multi-item'
          data-ride='carousel'
        >
          {/*Controls*/}
          <div
            className='controls-top'
            style={{ textAlign: 'center', marginBottom: '30px' }}
          >
            <a
              className='btn-floating'
              href='#multi-item-example'
              data-slide='prev'
            >
              <i
                style={{
                  border: '1px solid #007bff',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  lineHeight: '50px',
                  color: '#fff',
                  backgroundColor: '#007bff',
                  pointer: 'cursor',
                }}
                className='fa fa-chevron-left'
              />
            </a>

            <a
              className='btn-floating'
              href='#multi-item-example'
              data-slide='next'
            >
              <i
                className='fa fa-chevron-right'
                style={{
                  border: '1px solid #007bff',
                  width: '50px',
                  height: '50px',
                  marginLeft: '20px',
                  borderRadius: '50%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  lineHeight: '50px',
                  color: '#fff',
                  backgroundColor: '#007bff',
                  pointer: 'cursor',
                }}
              />
            </a>
          </div>
          {/*/.Controls*/}

          {/*Slides*/}
          <div className='carousel-inner' role='listbox'>
            {/*First slide*/}
            <div className='carousel-item active'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='shadow card mb-2'>
                    <img
                      className='card-img-top'
                      src='https://shop.static.ingka.ikea.com/revamp/laundry-baskets_20601.jpg?imwidth=300'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>Laundry baskets</h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        Keep your space tidy and your dirty clothes out of sight
                        with IKEA's laundry hampers and baskets that come in
                        various styles, sizes, colors.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 clearfix d-none d-md-block'>
                  <div className='shadow card mb-2'>
                    <img
                      className='shadow card-img-top'
                      src='https://www.ikea.com/images/be/f7/bef707ac43c5c8bcba395d4e2935369c.jpg?f=xl'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>
                        Kids storage & organization
                      </h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        Kids grow and so do their storage needs. From dinosaurs
                        to sea shell collections, you can find a box or basket
                        to keep all their new interests organized and help
                        refresh the look of their room.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 clearfix d-none d-md-block'>
                  <div className='shadow card mb-2'>
                    <img
                      className='card-img-top'
                      src='https://www.ikea.com/images/12/04/1204612da730274a78aa6afee998b7bf.jpg?f=xl'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>Changing station</h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        Let's be honest—diaper changes probably don't top
                        anyone's list of fun things to do. But our changing
                        tables make it feel a bit easier. . With drawers and
                        shelves that keep necessities in reach.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.First slide*/}
            {/*Second slide*/}
            <div className='carousel-item'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='shadow card mb-2'>
                    <img
                      className='card-img-top'
                      src='https://shop.static.ingka.ikea.com/revamp/appliances_ka002.jpg?imwidth=300'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>Kitchen appliances</h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        Our complete range of ovens offer smart functions and
                        integrated accessories to help get the most out of
                        anything from a simple snack to an elaborate family
                        feast.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 clearfix d-none d-md-block'>
                  <div className='shadow card mb-2'>
                    <img
                      className='card-img-top'
                      src='https://shop.static.ingka.ikea.com/category-images/Category_desk-chairs.jpg?imwidth=300'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>Desk chairs</h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        Home is where your chair is. Be creative, work or study
                        from home. You can get the right chair to fit any style
                        you have, and match any desk or table. They’re great to
                        sit in too.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 clearfix d-none d-md-block'>
                  <div className='shadow card mb-2'>
                    <img
                      className='card-img-top'
                      src='https://shop.static.ingka.ikea.com/revamp/wall-storage_20676-us.jpg?imwidth=300'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>Kitchen wall storage</h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        When cabinet and drawer space is in short supply – but
                        your kitchenware and supplies aren’t – wall storage can
                        fill the gap. Create your own solution with rails,
                        hooks, containers and shelves.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.Second slide*/}
            {/*Third slide*/}
            <div className='carousel-item'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='shadow card mb-2'>
                    <img
                      className='card-img-top'
                      src='https://shop.static.ingka.ikea.com/revamp/bar-tables-sets_47360.jpg?imwidth=500'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>Bar tables sets</h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        Turn your home in to a local hotspot with IKEA’s
                        collection of bar and pub furniture. Our bar furniture
                        is perfect for giving your meals and refreshments little
                        lift.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 clearfix d-none d-md-block'>
                  <div className='shadow card mb-2'>
                    <img
                      className='card-img-top'
                      src='https://shop.static.ingka.ikea.com/category-images/Category_racks-and-stands.jpg?imwidth=300'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>Clothes racks & stands</h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        Need a quick fix to take care of a lot of clothes? Say
                        hello to our coat stands, clothes rail and coat hanger
                        stands. They’re easy to assemble, easy to move and easy
                        to fit in.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 clearfix d-none d-md-block'>
                  <div className='shadow card mb-2'>
                    <img
                      className='card-img-top'
                      src='https://shop.static.ingka.ikea.com/revamp/rugs-mats-flooring_rm001.jpg?imwidth=300'
                      alt='Card image cap'
                    />
                    <div className='card-body'>
                      <h4 className='card-title'>Rugs</h4>
                      <p className='card-text' style={{ fontSize: '14px' }}>
                        A rug can be a great way to update your home for a
                        minimal investment. Everything feels cozier, warmer and
                        softer. Choose between flatwoven or low pile rugs for
                        open, flexible spaces.
                      </p>
                      <a className='btn btn-primary'> SHOP NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.Third slide*/}
          </div>
          {/*/.Slides*/}
        </div>
        {/*/.Carousel Wrapper*/}
        <hr className='my-4' />
      </div>
      <div className='container section-5'>
        <div className='row' style={{ marginBottom: '2rem' }}>
          <div className='col-sm blog-1'>
            <h1> The Maynooth blog</h1>
            <br></br>
            <p>
              Looking for interiors ideas? Be inspired by our trend round-ups,
              expert advice and envy-inducing Original Habitat series in which
              we take a peek inside some of the coolest homes out there.
            </p>
            <div className='card bg-dark text-white'>
              <img
                src="https://images.unsplash.com/photo-1579019169915-d1313c3c9d7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'"
                className='card-img'
                alt='...'
              />
              <div className='card-img-overlay'>
                <h5 className='card-title'>Be Inspired</h5>
                <p className='card-text'>Which Decorating Decade Are You In?</p>
                <p className='card-text'>
                  To celebrate almost 6 decades since Maynooth started trading,
                  we've taken a trip down memory lane and looked at how the US's
                  living room have changed from the 60s till now.
                </p>
              </div>
            </div>
          </div>
          <div className=' col-sm blog-2'>
            <div className='card bg-dark text-white' style={{ height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1526055577108-80193f001dde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                className='card-img'
                alt='...'
                style={{ height: '100%' }}
              />
              <div className='card-img-overlay'>
                <h5 className='card-title'>Trending Now</h5>
                <p className='card-text'>9 interior Trends To Know In 2020</p>
                <p className='card-text'>
                  Whether earthy pigments are your thing or you have a penchant
                  for patterns, click here for some serious designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
