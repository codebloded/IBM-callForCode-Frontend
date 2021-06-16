import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Navbar() {
    return (

        <NavBar>
            <Brand><Link style={{ textDecoration: "none", color: "white" }} to='/'>Call For Code</Link></Brand>
            <Navitem><Link style={{ textDecoration: "none", color: "white" }} to='/login'>Login</Link></Navitem>
            <Navitem><Link style={{ textDecoration: "none", color: "white" }} to='signup'>Signup</Link></Navitem>

        </NavBar >

    )
}

const NavBar = styled.div`
    display: flex;
    align-items: center;
    
    background:#3f50b5;
    color: white;
    font-family: Helvetica;
    font-weight: 300;
`
const Navitem = styled.p`
    padding: 10px 16px;
    cursor: pointer;
    vertical-align: middle;
    :hover{
        background-color: #757de8;
        border:none;
        border-radius: 10px;

    }
`
const Brand = styled.p`
    padding: 16px 16px;
    cursor: pointer;
    vertical-align: middle;
    margin-right: auto;
    font-size: 1.3rem;
    padding: 12px 16px;
`