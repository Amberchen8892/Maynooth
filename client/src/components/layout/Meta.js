import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Maynooth',
  description: 'We sell unique and modern furniture with cheap price',
  keywords: 'furniture, cheap furniture, unique furniture, modern furniture',
};

export default Meta;
