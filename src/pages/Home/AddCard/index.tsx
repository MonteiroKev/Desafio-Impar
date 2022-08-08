import { toast } from "react-toastify";
import addImgIcon from "../../../assets/icone_criar.png";
import {
  ContainerButton,
  ContainerIncludeImg,
  ContainerNewCard
} from "./style";

export function AddCard() {
  function handleNotification() {
    toast.error("Funcionalidade não foi aplicada");
  }
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
          <ContainerIncludeImg>
            Nenhum arquivo selecionado
            <label htmlFor="arquivo">
              Escolher arquivo
              <input
                type="file"
                id="arquivo"
                placeholder="Nenhum arquivo selecionado"
              />
            </label>
          </ContainerIncludeImg>
        </form>

        <ContainerButton>
          <button onClick={handleNotification}>Criar Card</button>
        </ContainerButton>
      </ContainerNewCard>
    </>
  );
}
