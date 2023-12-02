import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { ArrowLeftStyled, FormContainer, InfoContainer, RegisterContainer, TextContainer } from './style'

export function Register(){

    const navigate = useNavigate();

    function handleSubmitRegister(){
        navigate('/')
    }

    return (
        <RegisterContainer>
            <InfoContainer>
                <TextContainer>
                    <img src={logo} />
                    <h1>Crie sua conta</h1>
                    <p className="text-info">Faça seu cadastro, entre na plataforma e ajude os animaizinhos à encontrar um lar, ou cadastre animais
                    para doação.</p>
                    <a href="/" className="back-logon">
                        <ArrowLeftStyled
                            size={32}
                        />
                        <p>Voltar para o logon</p>
                    </a>
                </TextContainer>
                <FormContainer onSubmit={handleSubmitRegister}>
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Senha" />
                    <button type="submit">Cadastrar</button>
                </FormContainer>
            </InfoContainer>
        </RegisterContainer>
    )
}