import { StyledFooter } from "./styles";
import kenzie from "../../assets/images/kenzie.jpeg";

export const Footer = () => {
  return (
    <StyledFooter>
      <img src={kenzie} alt="Logo Kenzie" />
      <p>A Escola desenvolvedora de desenvolvedores</p>
    </StyledFooter>
  );
};
