import React, { useState } from 'react'
import styled from "styled-components"
import {
    Content,
    Input,
    Button,
    Para,
    Heading,
} from "./LoginPage";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <React.Fragment>

            <Content>
                <Heading>Sign Up</Heading>
                <form >
                    <div>
                        <Para>First Name</Para>
                        <Input type="text" onChange={(e) => setName(e.target.value)} />
                        <Para>Last Name</Para>
                        <Input type="text" onChange={(e) => setLastName(e.target.value)} />
                        <Para>Email Address</Para>
                        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                        <Para>Password</Para>
                        <Input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Signup type="submit">SIGN UP</Signup>
                </form>
            </Content>
        </React.Fragment>
    );
};

const Signup = styled(Button)`
  position: relative;
  margin-top: 30px;
`;

