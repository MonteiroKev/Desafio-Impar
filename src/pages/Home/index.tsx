import { useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { CardModalAdicionar } from "../../components/modal/CardModalAdicionar";
import { Search } from "../../components/Search";
import { CardList, Content, MainContainer, MotionContainer } from "./style";

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
          <MotionContainer
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeIn",
            }}
          >
            <CardList>
              {Array(8)
                .fill(undefined)
                .map((card) => (
                  <Card />
                ))}
            </CardList>
          </MotionContainer>
        </Content>
      </MainContainer>
      <CardModalAdicionar setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}
