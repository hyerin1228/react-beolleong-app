import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard';
import styled from 'styled-components';


const ProductListPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            const response = await fetch('https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/products/');
            const data = await response.json();
            setProducts(data.result);
            // console.log(products)
        }
        fetchProducts();
    }, []);
    

  return (
    <>
        <h2 style={{ 
            display: 'block', 
            textAlign:'center',
            marginTop: '3rem',
            marginBottom: '3rem'
            }}> Trending
        </h2>
        <StyledProductListPage>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </StyledProductListPage>
    </>
  )
}




// const StyledProductListPage = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 20px;
//   justify-content: space-evenly;
//   gap: 20px;
// `;

const StyledProductListPage = styled.div`
    display: grid;
    grid-gap: 32px 24px; /* gap-y-12와 gap-x-8에 해당하는 값 */
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* 모바일 기기를 기준으로 2열 */
    padding-left: 1.25rem;
    padding-right: 1.25rem;


    @media (min-width: 768px) { /* md:grid-cols-3에 해당 */
    grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1024px) { /* lg:grid-cols-4에 해당 */
    grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (min-width: 1280px) { /* xl:grid-cols-6에 해당 */
    grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;


export default ProductListPage