import { ArrowRightStyled, LoginComponent, LoginContainer } from "./style";

import bgImg from '../../assets/background_image.svg';
import logo from '../../assets/logo.svg'

export function Login(){
    return (
        <LoginContainer>
            <LoginComponent>
                <img src={logo} />

                <form className="login-form">
                    <p>Faça seu logon</p>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
                <div className="register-button">
                   <a href="/cadastro">
                        <ArrowRightStyled 
                            size={32}
                        />
                        <p>Não tenho cadastro</p>
                   </a>
                </div>
            </LoginComponent>
            <img src={bgImg} className="background" />
        </LoginContainer>
    )
}