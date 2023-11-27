import logo from "../../assets/images/logo.png";
import { StyledHeader } from "./styles.js";
import Switch from "react-switch";

export const Header = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return currentTime.toLocaleTimeString(undefined, options);
  };

  return (
    <StyledHeader>
      <img src={logo} alt="Logotipo da Lista de Contatos" />
      <div>
        <h4>Projeto FullStack</h4>
        <h4>Lista de Contatos</h4>
      </div>
      <div>
        <p>{getCurrentDate()}</p>
        <p>{getCurrentTime()}</p>
        <Switch />
        <p>by Wilson</p>
      </div>
    </StyledHeader>
  );
};
