import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { useContact } from "../../hooks/useContact";
import { Input } from "../../fragments/Input";
import { Form } from "../../fragments/Form";
import { ModalContainerAddContact } from "./styles";

export const ModalAddContact = ({ setContactList, toggleModal }) => {
  const { createContact, contactList } = useContact();
  const { handleSubmit, register } = useForm();

  const submit = async (formData) => {
    await createContact(formData);
    console.log("clicou");
  };

  return (
    <Modal toggleModal={toggleModal}>
      <ModalContainerAddContact>
        <Form onSubmit={handleSubmit(submit)}>
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
            type="text"
            label="Telefone"
            id="phone"
            placeholder="Digite o numero do telefone"
            {...register("phone")}
          />
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </Form>
      </ModalContainerAddContact>
    </Modal>
  );
};
