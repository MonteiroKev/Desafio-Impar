import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { CardModalAdd } from "../../components/Modal/CardModalAdd";
import { Search } from "../../components/Search";

import { CardList, Content, MainContainer, MotionContainer } from "./style";

type Pokemon = {
  name: string;
  url: string;
};

export function Home() {
  const [search, setSearch] = useState("");
  const [IsOpenAdd, setIsOpenAdd] = useState(false);

  const { data } = useQuery<Pokemon[]>(["pokemon"], async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
    );
    return response.data.results;
  });

  let filteredData = search
    ? data?.filter((item) => item.name.includes(search))
    : data;

  return (
    <>
      <Header />
      <MainContainer>
        <Search search={search} setSearch={setSearch} />
        <Content>
          <div className=" titulo-principal">
            <h1>Resultado de busca</h1>
            <button onClick={() => setIsOpenAdd(true)}>Novo Card</button>
          </div>
          <CardList>
            {filteredData?.map((pokemon: Pokemon) => {
              return (
                <MotionContainer
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 0, opacity: 0.6 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeIn",
                  }}
                >
                  <Card
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                  />
                </MotionContainer>
              );
            })}
          </CardList>
        </Content>
      </MainContainer>
      <CardModalAdd
        setIsOpenAdd={() => setIsOpenAdd(false)}
        IsOpenAdd={IsOpenAdd}
      />
    </>
  );
}
