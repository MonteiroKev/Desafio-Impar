import { useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { CardModalAdd } from "../../components/modal/CardModalAdd";
import { Search } from "../../components/Search";
import { CardList, Content, MainContainer } from "./style";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <MainContainer>
        <Search />
        <Content>
          <div className=" titulo-principal">
            <h1>Resultado de busca</h1>
            <button onClick={() => setIsOpen(true)}>Novo Card</button>
          </div>
          <CardList>
            {Array(8)
              .fill(undefined)
              .map((card) => (
                <Card />
              ))}
          </CardList>
        </Content>
      </MainContainer>
      <CardModalAdd setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}
