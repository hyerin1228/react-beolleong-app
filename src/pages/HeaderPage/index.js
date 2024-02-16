import React from 'react'
import styled from 'styled-components';

const HeaderPage = () => {
  return (
    <HeaderContainer>
        <Logo>벌렁</Logo>
        <Brand>Brand</Brand>
        <HeaderIcon>
            <Cart>장바구니</Cart>
            <Login>회원가입</Login>
        </HeaderIcon>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    position: sticky;
    display: flex;
    top: 0;
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    min-height: 20vh;
    font-size: calc(10px + 2vmin);
    color: black;
    align-items: center;
    column-gap: 1rem;
    padding-left: 1.25rem;
    flex-shrink: 0;
    height: 4rem;
`;

const Logo = styled.h1`
    display: inline-block;
    font-size: 1.5em;
    margin-left: 20px;
`;

const Brand = styled.nav`
    margin-left: 5rem; 
`;


const HeaderIcon = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-left: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`;


const Cart = styled.div`
`;

const Login = styled.div`
`;

export default HeaderPage