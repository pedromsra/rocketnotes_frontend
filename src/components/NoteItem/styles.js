import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${({theme, isNew}) => isNew ?  `.1rem dashed ${theme.COLORS.BACKGROUND_900}` : "none"};
    border-radius: 1rem;

    margin-bottom: .8rem;
    padding-right: 1.6rem;
    

    > button {
        border: none;
        background: none
    }

    > input {
        height: 5.6rem; 
        width: 100%;

        padding: 1.2rem;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    svg {
        width: 2.4rem;
        height: 2.2rem;

        color: ${({theme, isNew}) => isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
    }

`;