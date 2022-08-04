import { AddCard } from "../../components/AddCard";
import { Header } from "../../components/Header";
import { CardList, MainContainer } from "./style";

export function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <div className="flex align-center titulo-principal">
          <h1>Resultado de busca</h1>
          <button>Novo Card</button>
        </div>
        <CardList>
          <AddCard />
        </CardList>
      </MainContainer>
    </>
  );
}
