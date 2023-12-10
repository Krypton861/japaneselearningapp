import React, { useState } from "react";
import LogOutButton from "./LogOutButton";
import LogInButton from "./LogInButton";
import LoginInputFields from "./LoginInputFields";
import CreateAccountButton from "./CreateAccountButton";
import "../../App.css";

export default function LoginPage(){
    const [email, setEmail] = useState("mycoolemail@gmail2.com");
    const [password, setPassword] = useState("123456");
  
    //TODO make the Buttons and Fields next to each other.
    return (
        <>
            <LoginInputFields setEmail={setEmail} setPassword = {setPassword}></LoginInputFields>            
            <LogInButton email={email} password = {password}></LogInButton>
            <CreateAccountButton email={email} password = {password}></CreateAccountButton>
            <LogOutButton></LogOutButton>
            <div>{email}{password}</div>
        </>
    )
}