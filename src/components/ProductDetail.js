import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct(){
            const response = await fetch(`https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/products/${productId}`);
            const data = await response.json();
            setProduct(data.result);
        }
        fetchProduct();
    }, [productId]);

  return (
    <Section>
        {product === null ? (
            <p>상품 정보가 없습니다.</p>
        ) : (
            <>
                <div>
                    <Thumbnail src={product.imgSrc} alt="product thumbnail" />
                </div>
                <div>
                    <Brand>{product.brand.nameEn}</Brand>
                    <Title>{product.name}</Title>
                    <Price>
                        <span style={{
                        textDecoration: 'line-through',
                        color: 'red'
                        }}>
                        ￦{product.originalPrice}
                        </span>
                        <span>
                        &nbsp;￦{product.price}
                        </span>
                    </Price>
                </div>
            </>
        )}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const Thumbnail = styled.img`
`;
const Brand = styled.div`
`;
const Title = styled.div`
`;
const Price = styled.div`
`;

export default ProductDetail