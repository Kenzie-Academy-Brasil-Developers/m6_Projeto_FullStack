import { Button } from "../../../fragments/Button";
import { useAuth } from "../../../hooks/useAuth";

export const Dashboard = () => {
  const { userLogout, user } = useAuth();

  return (
    <>
      <div>
        <h1>Dashboard Pages</h1>
        <Button name="Voltar" onClick={() => userLogout()} />
      </div>
      <div>{user && user.full_name}</div>
      <div>{user && user.email}</div>
      <div>{user && user.phone}</div>
    </>
  );
};
