import { useForm } from "react-hook-form";
import { GrDocumentUpdate } from "react-icons/gr";
import { Modal } from "../Modal";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { updateUserSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../fragments/Form";
import { Input } from "../../fragments/Input";
import { ModalContainerAddContact } from "../ModalAddContact/styles";
import { toast } from "react-toastify";

export const ModalUpdateUser = ({ toggleModal, userId }) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateUserSchema),
  });
  const { getUserById, updateUser } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await getUserById(userId);
        setValue("full_name", userData.full_name);
        setValue("email", userData.email);
        setValue("password", userData.password);
        setValue("phone", userData.phone);
      } catch (error) {
        toast.error("Erro ao atualizar contato", { autoClose: 500 });
        console.error("Erro ao buscar os dados do contato:", error);
      }
    };
    getUser();
  }, [userId, setValue]);

  const submit = async (formData) => {
    await updateUser(userId, formData);
    reset();
    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <ModalContainerAddContact>
        <div>
          <h4>Atualizar Contato</h4>
        </div>
        <Form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            //label="Nome Completo"
            id="name"
            placeholder="Digite seu nome completo"
            {...register("full_name")}
            error={errors.full_name}
          />

          <Input
            type="email"
            //label="E-mail"
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
            error={errors.email}
          />

          <Input
            type="password"
            //label="Senha"
            id="password"
            placeholder="Digite a senha"
            {...register("password")}
            error={errors.password}
          />

          <Input
            type="password"
            //label="Confirme Senha"
            id="confirmPassword"
            placeholder="Confirme a senha"
            {...register("confirm")}
            error={errors.confirmPassword}
          />

          <Input
            type="text"
            //label="Telefone"
            id="phone"
            placeholder="Digite o numero do telefone"
            {...register("phone")}
            error={errors.phone}
          />
          <div>
            <span>Atualizar</span>
            <button type="submit">
              <GrDocumentUpdate />
            </button>
          </div>
        </Form>
      </ModalContainerAddContact>
    </Modal>
  );
};
