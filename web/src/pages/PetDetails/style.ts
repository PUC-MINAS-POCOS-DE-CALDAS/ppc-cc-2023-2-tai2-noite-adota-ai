import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
`

export const PetDetailsContainer = styled.section`
    width: 90%;
    height: auto;

    background-color: ${(props) => props.theme.gray};
    border-radius: 10px;
    box-shadow: 4px 4px 10px 5px rgba(0,0,0,0.2);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding: 3rem 2rem;

    @media (max-width: 1150px){
        width: 90%;

        padding: 2rem;
    }
`
export const AdoptionContainer = styled.section`
    width: 100%;

    display: flex;
    align-items: flex-start;

    margin-top: 1rem;
    gap: 1.75rem;

    @media (max-width: 1150px){
        flex-direction: column;
    }

    @media(max-width: 768px){
        .dog {
            width: 100%;
        }
    }
`

export const InfosContainer = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    height: 100%;    

    h1 {
        color: ${(props) => props.theme['black-gray']};
        font-size: 2.25rem;
        margin-top: .5rem;
    }

    h3 {
        color: ${(props) => props.theme['black-gray']};
        font-size: 1.5rem;
        margin-top: 3rem;
    }

    h4 {
        color: ${(props) => props.theme['black-gray']};
        font-size: 1.25rem;
        margin-top: 3rem;
    }

    p {
        color: ${(props) => props.theme['dark-gray']};
        font-size: 1.125rem;    
        margin-top: 1.5rem;
    }

    .contacts {
        display: flex;
        gap: 2rem;
        margin-top: 6rem;

        button {
            border: 0;
            border-radius: 6px;
            cursor: pointer;

            padding: 1rem 3.5rem;

            background-color: ${(props) => props.theme.orange};
            color: ${(props) => props.theme.white};
            font-weight: bold;
        }
    }

    @media (max-width: 1150px){
        padding: 0 2rem;
    }

    @media (max-width: 768px){
        padding: 0 1rem;

        .contacts {
            button {
                padding: 1rem 2.5rem;
            }
        }
    }
`