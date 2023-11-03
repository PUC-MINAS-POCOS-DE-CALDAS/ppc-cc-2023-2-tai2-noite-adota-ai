import { PetCardContainer } from "./style";

import dogImg from '../../../../assets/dog.png'
import { Trash } from "phosphor-react";

interface PetCardProps {
    //id: number,
    name: string,
    description: string,
    age: number
}

export function PetCard({ name, description, age }: PetCardProps){
    return (
        <PetCardContainer>
            <img src={dogImg} />
            <div className="info-container">
                <h3>{name}, {age} anos</h3>

                <h4>Descrição</h4>
                <p>{description}</p>
            </div>
            <div className="more-infos">
                <button className="button-info">Detalhes</button>
                <button className="button-delete">
                    <Trash 
                        size={32}
                        color="#737380"
                    />
                </button>
            </div>
        </PetCardContainer>
    )
}