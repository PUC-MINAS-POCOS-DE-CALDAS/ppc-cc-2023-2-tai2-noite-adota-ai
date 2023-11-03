import { HeaderContainer, PowerStyled } from "./style";

import logo from '../../../../assets/logo.svg'


export function Header(){
    return(
        <HeaderContainer>
            <div className="welcome-header">
                <img src={logo} />
                <p>Bem vindo(a), nome.</p>
            </div>
            <div className="buttons-container">
                <button className="button-create">
                    Cadastrar animal
                </button>
                <button className="button-logoff">
                    <PowerStyled 
                        size={32}
                    />
                </button>
            </div>
        </HeaderContainer>    
    )
}