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
                <ProductImage>
                    <img src={product.imgSrc} alt="product thumbnail" style={{ width: '100%', height: 'auto' }} />
                </ProductImage>
                
                <ProductContent>
                <Brand>
                    {product.brand.nameKr} / {product.brand.nameEn}
                </Brand>
                <Title>{product.name}</Title>
                <InfoContainer>
                    <InfoRow>
                        <Label>정가</Label>
                        <Price isOriginal>{product.originalPrice.toLocaleString()}</Price>
                    </InfoRow>
                    <InfoRow>
                        <Label>판매가</Label>
                        <Price>{product.price.toLocaleString()}</Price>
                    </InfoRow>
                    <InfoRow>
                        <Label>배송</Label>
                        <Text>당일배송</Text>
                    </InfoRow>
                    <InfoRow>
                        <Label>재고 번호</Label>
                        <Text>{product.stockNumber || '재고 정보 없음'}</Text>
                    </InfoRow>
                </InfoContainer>
                <Button>장바구니에 담기</Button>
                </ProductContent>
            </>
        )}
    </Section>
  );
}

const Section = styled.section`
    padding: 1.5rem 1.25rem; // py-6, px-5
    @media (min-width: 1024px) { // lg:
        padding: 2.5rem 2rem; // py-10, px-8
    }
    margin: auto;
    max-width: 1024px; // max-w-screen-lg
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

const ProductImage = styled.div`
    width: 100%;
    max-width: 400px;
    margin-right: 2rem;
`;

const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
`;

// 스타일 컴포넌트 추가
const Brand = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const InfoContainer = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Label = styled.span`
  font-size: 1rem;
  color: #333;
  margin-right: 0.5rem;
`;

const Price = styled.span`
  font-size: 1.5rem;
  color: ${props => props.isOriginal ? '#333' : 'red'};
  text-decoration: ${props => props.isOriginal ? 'line-through' : 'none'};
`;

const Text = styled.span`
  font-size: 1rem;
  color: #333;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 1rem;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 100%;
`;




export default ProductDetail