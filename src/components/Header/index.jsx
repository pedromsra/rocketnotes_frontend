import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";


export function Header({  }) {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt="foto do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={ handleSignOut }>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}