import { useForm } from "react-hook-form";
import { loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/useAuth";
import { StyledControllerLogin } from "./styles";
import { Link } from "react-router-dom";
import { Form } from "../../../fragments/Form";
import { Input } from "../../../fragments/Input";
import { Button } from "../../../fragments/Button";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { userLogin } = useAuth();

  const submitLogin = (formData) => {
    console.log(formData);
    userLogin(formData);
    reset();
  };

  return (
    <>
      <StyledControllerLogin>
        <h1>Login</h1>
        <div>
          <Form onSubmit={handleSubmit(submitLogin)}>
            <Input
              type="email"
              label="Email"
              id="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : null}

            <Input
              type="password"
              label="Senha"
              id="password"
              placeholder="Digite a senha"
              {...register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : null}
            <div>
              <Button name="Acessar" type="submit" />
            </div>
          </Form>
        </div>
        <h3>Ainda não possui uma conta?</h3>
        <Link to="/register">
          <Button name="Cadastre-se" />
        </Link>
      </StyledControllerLogin>
    </>
  );
};
