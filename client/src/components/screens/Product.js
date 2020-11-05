import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded shadow'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          style={{ objectFit: 'cover', width: '100%', height: '35vh' }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className='product-name'>
          <Card.Title as='div' style={{ color: 'black' }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} `} />
        </Card.Text>
        <Card.Text as='h3' style={{ padding: '1rem 0' }}>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
