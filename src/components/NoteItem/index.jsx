import {Container} from "./styles"

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"

export function NoteItem({isNew = false, value, onClick, ...rest}) {
    return (
        <Container isNew = {isNew} >
            <input type = "text" value = {value}
                readOnly={!isNew} {...rest} 
            />

            <button type = "button"
                onClick={onClick}
            >
                {isNew ? <AiOutlinePlus /> : <AiOutlineClose />}
            </button>
            
        </Container>
    )
}