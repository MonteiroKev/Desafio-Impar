import addImgIcon from "../../assets/icone_criar.png";
import {
  ContainerButton,
  ContainerIncluirImg,
  ContainerNewCard
} from "./style";

export function AddCard() {
  return (
    <>
      <ContainerNewCard>
        <header>
          <img src={addImgIcon} />
          <h2> Criar Card</h2>
        </header>

        <form>
          <p>DIGITE UM NOME PARA O CARD</p>
          <input type="text" placeholder="Digite o título" />
          <p>INCLUA UMA IMAGEM PARA APARECER NO CARD</p>
          <ContainerIncluirImg>
            Nenhum arquivo selecionado
            <label htmlFor="arquivo">
              Escolher arquivo
              <input
                type="file"
                id="arquivo"
                placeholder="Nenhum arquivo selecionado"
              />
            </label>
          </ContainerIncluirImg>
        </form>

        <ContainerButton>
          <button>Criar Card</button>
        </ContainerButton>
      </ContainerNewCard>
    </>
  );
}
