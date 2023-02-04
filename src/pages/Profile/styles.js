import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;

        background: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 12.4rem;

        > :first-child {
            cursor: pointer;
            transition: filter .3s;
    
            &:hover{
                filter: brightness(0.8)
            }
        }

        svg {
            color: ${({theme}) => theme.COLORS.GRAY_100};

            font-size: 2.4rem;
        }
    }
`;

export const Form = styled.form`
    max-width: 34rem;

    margin: -10rem auto 0;

    > div:nth-child(4){
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
    position: relative;

    margin: 0 auto 3.2rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;

        background-color: ${({theme}) => theme.COLORS.ORANGE};

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .7rem;
        right: .7rem;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2.6rem;
            height: 2.6rem;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }
`;