import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 6.4rem 0;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 1.2rem;

        a {
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div`
    max-width: 57rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 3.6rem;
        font-weight: 500;
        line-height: 4.7rem;
        margin-bottom: 1.6rem;
    }

    p {
        line-height: 1.9rem;
        text-align: justify;
    }

    > button:first-child {
        align-self: end;
    }
`;