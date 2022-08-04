import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { CardList, MainContainer, MotionContainer } from "./style";

export function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <div className="flex align-center titulo-principal">
          <h1>Resultado de busca</h1>
          <button>Novo Card</button>
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
    </>
  );
}
