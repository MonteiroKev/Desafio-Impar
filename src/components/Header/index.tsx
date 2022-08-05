import logo from "../../assets/logo-teste.svg";
import { Wrapper } from "./style";

export function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="" />
    </Wrapper>
  );
}
