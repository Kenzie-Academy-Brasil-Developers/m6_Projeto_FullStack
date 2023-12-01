import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { Input } from "../../fragments/Input";
import { Form } from "../../fragments/Form";
import { ModalContainerAddContact } from "../ModalAddContact/styles";
import { useContact } from "../../hooks/useContact";

export const ModalUpdateContact = ({
  setContactList,
  toggleModal,
  contactId,
}) => {
  const { handleSubmit, register } = useForm();
  const { createContact, contactList, updateContact } = useContact();

  const submit = async (formData) => {
    // Adicione o ID do contato como primeiro argumento
    await updateContact(contactId, formData); // Pass contactId as the first argument
    console.log("Contact ID:", contactId);
    console.log(formData);
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
            <button type="submit">Atualizar</button>
          </div>
        </Form>
      </ModalContainerAddContact>
    </Modal>
  );
};
