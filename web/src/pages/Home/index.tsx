import { Header } from "./components/Header";
import { PetCard } from "./components/PetCard";
import { AdoptionListContainer, HomeContainer } from "./style";

export function Home(){
    return(
        <HomeContainer>
            <Header />
            <AdoptionListContainer>
                <PetCard
                    name="Bilu"
                    description="Cachorro muito bonito encontrado na rua em um dia de chuva, muito dócil, convive bem com outros animais"
                    age={2}
                />
                <PetCard
                    name="Bilu"
                    description="Cachorro muito bonito encontrado na rua em um dia de chuva, muito dócil, convive bem com outros animais"
                    age={2}
                />
                <PetCard
                    name="Bilu"
                    description="Cachorro muito bonito encontrado na rua em um dia de chuva, muito dócil, convive bem com outros animais"
                    age={2}
                />
                <PetCard
                    name="Bilu"
                    description="Cachorro muito bonito encontrado na rua em um dia de chuva, muito dócil, convive bem com outros animais"
                    age={2}
                />
            </AdoptionListContainer>
        </HomeContainer>
    )
}