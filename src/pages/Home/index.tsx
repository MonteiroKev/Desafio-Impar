import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { CardList, Content, MainContainer, MotionContainer } from "./style";

export function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <Search />
        <Content>
          <div className=" titulo-principal">
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
              {Array(8)
                .fill(undefined)
                .map((card) => (
                  <Card />
                ))}
            </CardList>
          </MotionContainer>
        </Content>
      </MainContainer>
    </>
  );
}
