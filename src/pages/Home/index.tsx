import { useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { CardModal } from "../../components/modal";
import { CardList, MainContainer, MotionContainer } from "./style";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      {/* <MotionContainer
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
      >
        <AddCard />
      </MotionContainer> */}
      <MainContainer>
        <div className="flex align-center titulo-principal">
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardList>
        </MotionContainer>
      </MainContainer>

      <CardModal setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}
