import { Link } from "react-router-dom";
import { Form } from "../../../fragments/Form";
import { Input } from "../../../fragments/Input";
import {
  StyledButtonBack,
  StyledButtonContainerRegister,
  StyledControllerRegister,
  StyledButtonRegister,
} from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../dashboard/validator";

export const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { userRegister } = useAuth();

  const submitRegister = (formData) => {
    userRegister(formData);
    console.log(formData);
    reset();
  };

  return (
    <StyledControllerRegister>
      <h1>Cadastre-se</h1>
      <Form onSubmit={handleSubmit(submitRegister)}>
        <Input
          type="text"
          label="Nome Completo"
          id="name"
          placeholder="Digite seu nome completo"
          {...register("full_name")}
        />
        <Input
          type="email"
          label="E-mail"
          id="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        <Input
          type="password"
          label="Senha"
          id="password"
          placeholder="Digite a senha"
          {...register("password")}
        />
        <Input
          type="text"
          label="Telefone"
          id="phone"
          placeholder="Digite o numero do telefone"
          {...register("phone")}
        />

        <StyledButtonContainerRegister>
          <Link to="/">
            <StyledButtonBack> Voltar </StyledButtonBack>
          </Link>
          <StyledButtonRegister type="submit">Cadastrar</StyledButtonRegister>
        </StyledButtonContainerRegister>
      </Form>
    </StyledControllerRegister>
  );
};
