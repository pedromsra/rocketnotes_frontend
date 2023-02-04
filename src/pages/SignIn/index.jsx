import { useState } from "react";

import { useAuth } from "../../hooks/auth"

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom";

import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"

export function SignIn() {
    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn(){
        signIn({email, password});
    }

    return (
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça seu login</h2>
                <Input icon = {AiOutlineMail} type = "text" placeholder = "E-mail" onChange={e => setEmail(e.target.value)} />
                <Input icon = {AiOutlineLock} type = "password" placeholder = "Senha" onChange={e => setPassword(e.target.value)} />
                <Button title = "Entrar" onClick = {handleSignIn} />
                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    )
}