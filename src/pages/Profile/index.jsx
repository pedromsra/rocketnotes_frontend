import { useState } from "react";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";

import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

export function Profile(){
    const navigate = useNavigate();
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    const [avatarLink, setAvatarLink] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            oldPassword: passwordOld,
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile(userUpdated, avatarFile)
        navigate("/");
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];

        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatarLink(imagePreview);
    }
    
    return(
        <Container>
            <header>
                <AiOutlineArrowLeft onClick={() => navigate(-1)}/>
            </header>
            <Form>
                <Avatar>
                    <img
                        src={avatarLink}
                        alt="foto do usuário"
                    />
                    <label htmlFor="avatar" >
                        <AiOutlineCamera />

                        <input id="avatar" type="file" onChange={handleChangeAvatar} />
                    </label>
                </Avatar>
                <Input type="text" placeholder="Nome" icon={AiOutlineUser} value = {name} onChange = {e => setName(e.target.value)} />
                <Input type="text" placeholder="E-mail" icon={AiOutlineMail} value = {email} onChange = {e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Senha atual" icon={AiOutlineLock} onChange = {e => setPasswordOld(e.target.value)} />
                <Input type="password" placeholder="Nova senha" icon={AiOutlineLock} onChange = {e => setPasswordNew(e.target.value)} />
                <Button title="Salvar" onClick={handleUpdate}  />
            </Form>
        </Container>
    )
}
