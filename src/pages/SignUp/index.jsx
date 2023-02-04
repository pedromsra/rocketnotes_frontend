import { useState } from "react";
import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";

import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai"

import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); /*[nome de estado, função que atualiza esse estado*/

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("preencha todos os campos")
        }

        api.post("/users", { name, email, password})
            .then(()=> {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar")
                }
            })
    }
    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocketnotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Crie sua conta</h2>
                <Input type="text" placeholder="Nome" icon={AiOutlineUser} onChange={e => setName(e.target.value)} />
                <Input type="text" placeholder="E-mail" icon={AiOutlineMail} onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Nome" icon={AiOutlineLock} onChange={e => setPassword(e.target.value)} />
                <Button title = "Cadastrar" onClick={handleSignUp} />
                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    )
}