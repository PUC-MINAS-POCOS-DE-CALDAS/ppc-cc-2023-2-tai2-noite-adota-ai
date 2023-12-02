import { ArrowLeftStyled } from "../Register/style";
import { AdoptionContainer, Container, InfosContainer, PetDetailsContainer } from "./style";

import dogImg from '../../assets/dog_big.png'

export function PetDetails(){

    return (
        <Container>
            <PetDetailsContainer>
                <a href="/home">
                    <ArrowLeftStyled
                        size={48}
                    />
                </a>
                <AdoptionContainer>
                    <img src={dogImg} className="dog" />
                    <InfosContainer>
                        <h1>Que tal salvar a vida deste animalzinho?</h1>
                        <h3>Bilu, 2 anos</h3>

                        <h4>Descrição</h4>
                        <p>O cachorrinho Bilu foi encontrado na Rua X, Bairro Y, e precisa de um lar urgente. No momento ela está em minha casa, porém não consigo ficar com ela por muito mais tempo, pois tenho outro cachorro que não está acostumado a conviver com outros animais e pode machucar ela!</p>
                        <div className="contacts">
                            <button className="button-email">E-mail</button>
                            <button className="button-whatsapp">Whatsapp</button>
                        </div>
                    </InfosContainer>
                </AdoptionContainer>
            </PetDetailsContainer>
        </Container>
    )
}