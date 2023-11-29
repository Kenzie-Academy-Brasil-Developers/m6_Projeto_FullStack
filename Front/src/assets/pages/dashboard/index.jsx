import { Button } from "../../../fragments/Button";
import { useAuth } from "../../../hooks/useAuth";

export const Dashboard = () => {
  const { userLogout } = useAuth();

  return (
    <div>
      <h1>Dashboard Pages</h1>
      <Button name="Voltar" onClick={() => userLogout()} />
    </div>
  );
};
