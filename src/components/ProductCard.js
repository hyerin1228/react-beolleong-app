import React from 'react'
import styled from 'styled-components';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Thumbnail src={product.imgSrc} alt="product thumbnail" />
      <Brand>{product.brand.nameKr}</Brand>
      <Title>{product.name}</Title>
      <Price>{product.originalPrice}/{product.price}</Price>
    </div>
  )
}

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const Brand = styled.div`
  font-size: 1.0rem;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 5px;
`;
const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;
const Price = styled.div`
font-size: 1.0rem;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export default ProductCard