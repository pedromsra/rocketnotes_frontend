import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";



import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input"
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home(){
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);

    function handleTagsSelected(tagName){

        if(tagName==="all"){
            return setTagsSelected([])
        }
        const alreadySelected = tagsSelected.includes(tagName);
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        } else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }
    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(()=>{
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }
        fetchTags();
    }, [])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }
        fetchNotes();
    },[tagsSelected, search])
    
    return (
        <Container>

            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive={tagsSelected.length === 0} onClick={() => handleTagsSelected("all")} /></li>
                {tags && tags.map(tag => <li key={String(tag.id)} ><ButtonText title={tag.name} isActive={tagsSelected.includes(tag.name)} onClick={() => handleTagsSelected(tag.name)} /></li>)}
            </Menu>

            <Search>
                <Input type = "text" icon={AiOutlineSearch} placeholder="Pesquisar pelo título" onChange = {e=>setSearch(e.target.value)} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    
                    {notes.map(note => <Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />)}
                    
                </Section>
            </Content>

            <NewNote to="/new">
                <AiOutlinePlus /><span>Criar nota</span>
            </NewNote>
        </Container>
    );
};