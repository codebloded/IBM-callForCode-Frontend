import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <React.Fragment>
            <Content>
                <Heading>Sign In</Heading>
                <form >
                    <div>
                        <Para>Email Address</Para>
                        <Input type="email" />
                        <Para>Password</Para>
                        <Input type="text" />
                    </div>
                    <Button>SIGN IN</Button> <br></br>
                </form>
                <ForgotBlock>
                    <ParaA>Forgot password ?</ParaA>
                </ForgotBlock>

                <Space>

                    <p
                        style={{
                            fontSize: "17px",
                            fontFamily: "Rubik",
                            fontWeight: 600,
                            color: "#595555",
                        }}
                    >
                        OR
                    </p>
                </Space>
                <Link to="signup">
                    {" "}
                    <CreateButton>CREATE ACCOUNT</CreateButton>
                </Link>
            </Content>
        </React.Fragment>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
const ForgotBlock = styled(Content)`
    flex-direction: row;
    margin-bottom: 20px;
  `;

const Space = styled(ForgotBlock)`
    position: relative;
    top: 30px;
  `;

const Para = styled.p`
    font-size: 17px;
    font-weight: 600;
    color: #595555;
  `;
const ParaA = styled(Para)`
    font-weight: 500;
    cursor: pointer;
  `;

const Heading = styled(Para)`
    font-size: 40px;
    font-weight: 600;
    position: relative;
    color: black;
    right: 115px;
    margin-bottom: 50px;
  `;

const Input = styled.input.attrs((props) => ({
    type: "text",
}))`
    background-color: #d6d3d3;
    width: 340px;
    border: none;
    border-radius: 31.55px;
    padding: 15px;
    margin: 5px 0px;
    margin-bottom: 20px;
  `;
const Button = styled.button`
    border-radius: 31.55px;
    background: #3e6ae1;
    font-size: 17px;
    font-weight: 500;
    color: white;
    border: none;
    width: 360px;
    padding: 15px;
    margin: 5px 0px;
    margin-bottom: 20px;
    cursor: pointer;
  `;
const CreateButton = styled(Button)`
    border: 4px solid black;
    width: 390px;
    background: transparent;
    color: #595555;
    position: relative;
    top: 50px;
  `;
export {
    Content,
    Input,
    Button,
    Heading,
    Para,
    ParaA,

};

