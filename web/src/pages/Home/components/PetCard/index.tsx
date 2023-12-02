import { PetCardContainer } from "./style";

import dogImg from '../../../../assets/dog.png'
import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

interface PetCardProps {
    //id: number,
    name: string,
    description: string,
    age: number
}

export function PetCard({ name, description, age }: PetCardProps){
    const navigate = useNavigate();

    function navigatePetDetail(){
        navigate('/detalhes')
    }

    return (
        <PetCardContainer>
            <img src={dogImg} />
            <div className="info-container">
                <h3>{name}, {age} anos</h3>

                <h4>Descrição</h4>
                <p>{description}</p>
            </div>
            <form className="more-infos" onSubmit={navigatePetDetail}>
                <button type="submit" className="button-info">Detalhes</button>
                <button className="button-delete">
                    <Trash 
                        size={32}
                        color="#737380"
                    />
                </button>
            </form>
        </PetCardContainer>
    )
}