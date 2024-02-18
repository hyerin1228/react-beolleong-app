import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignupPage from '../SignupPage';

const HeaderPage = () => {
  return (
    <HeaderContainer>
        <Link to="/">
            <Logo>벌렁</Logo>
        </Link>
        <Link to="/">
            <Brand>Brand</Brand>
        </Link>
        <HeaderIcon>
            <Link to="/">
                <span>장바구니</span>
            </Link>
            <Link to="/sign-up">
                <span>회원가입</span>
            </Link>
            <Link to="/">
                <span>로그인</span>
            </Link>
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