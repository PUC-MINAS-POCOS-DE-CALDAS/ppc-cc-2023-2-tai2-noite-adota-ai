import logo from '../../assets/logo.svg'
import { ArrowLeftStyled, FormContainer, InfoContainer, RegisterContainer, TextContainer } from './style'

export function PetRegister(){
    return (
        <RegisterContainer>
            <InfoContainer>
                <TextContainer>
                    <img src={logo} />
                    <h1>Cadastrar Animal</h1>
                    <p className="text-info">Cadastre o animal para adoção registrando seu nome, uma descrição sobre ele (situação atual), idade e uma imagem do animal.</p>
                    <a href="/" className="back-logon">
                        <ArrowLeftStyled
                            size={32}
                        />
                        <p>Voltar para a pagina inicial</p>
                    </a>
                </TextContainer>
                <FormContainer>
                    <input type="text" placeholder="Nome" />
                    <input type="number" placeholder="Idade" />
                    <input type="text" placeholder="Descrição" />
                    <button type="submit">Cadastrar</button>
                </FormContainer>
            </InfoContainer>
        </RegisterContainer>
    )
}