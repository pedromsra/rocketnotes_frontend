import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles"

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button";
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"

import { Link, useNavigate } from "react-router-dom";

export function New() {
    const navigate = useNavigate();
    const {user, createNote} = useAuth();

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleSaveNewNote (){
        if(newTag || newLink){
            return alert("Alguma nota ou tag ficou para trás, clique em adicionar ou deixe o campo vazio")
        }
        const note = {
            title,
            description,
            tags,
            links,
            user_id: user.id
        }

        await createNote(note);
        navigate("/")
    }


    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input type = "text" placeholder = "Título" onChange = {e => setTitle(e.target.value)} />
                    <TextArea placeholder = "Observações" onChange = {e => setDescription(e.target.value)} />

                    <Section title = "Liks úteis">
                        {links.map((link, index) => <NoteItem key={String(index)} value={link} onClick={() => handleRemoveLink(link)} />)}
                        <NoteItem isNew placeholder = "Novo link" value={newLink} onChange={e=>setNewLink(e.target.value)} onClick={handleAddLink} />
                    </Section>

                    <Section title = "Marcadores">
                        <div className = "tags">
                            {tags.map((tag, index) => <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />)}
                            <NoteItem isNew placeholder = "Novo marcador" value={newTag} onChange={e=>setNewTag(e.target.value)} onClick={handleAddTag} />
                        </div>
                    </Section>
                    <Button title = "Salvar" onClick={handleSaveNewNote} />
                </Form>
            </main>
        </Container>
    )
}