import { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { useAuth } from "../../../hooks/useAuth";
import {
  DashboardHeader,
  User,
  UserContact,
  UpdateButton,
  ExitButton,
  Title,
  ContactList,
  ButtonContainer,
  ContactContainer,
  UpdateButtonContact,
  DeleteButtonContact,
  DeleteUserButton,
  ButtonContainerUser,
  ContactName,
  ContactEmail,
  ContactPhone,
  ContactCreated,
} from "./styles";
import { api } from "../../../services/api";
import { useContact } from "../../../hooks/useContact";
import { Modal } from "../../../components/Modal";
import { ModalAddContact } from "../../../components/ModalAddContact";
import { Contacts } from "./Contacts";

export const Dashboard = () => {
  const { userLogout, user } = useAuth();
  const [isOpenModalAddContact, setIsOpenModalAddContact] = useState(false);
  const [isOpenModalUpdateUser, setIsOpenModalUpdateUser] = useState(false);

  const toggleModalUpdateUser = () =>
    setIsOpenModalUpdateUser(!isOpenModalUpdateUser);

  const toggleModalAddContact = () =>
    setIsOpenModalAddContact(!isOpenModalAddContact);

  return (
    <>
      <DashboardHeader>
        <div>
          <User>
            <h5> Usuário:</h5>
            <span> {user && user.full_name}</span>
          </User>
          <UserContact>
            <h5>Email:</h5>
            <span>{user && user.email}</span>
            <h5>Telefone:</h5>
            <span>{user && user.phone}</span>
          </UserContact>
        </div>
        <ButtonContainerUser>
          <UpdateButton onClick={toggleModalUpdateUser}>
            <GrDocumentUpdate />
          </UpdateButton>
          <DeleteUserButton>
            <MdDeleteForever />
          </DeleteUserButton>
        </ButtonContainerUser>
        <ExitButton onClick={() => userLogout()}>Sair</ExitButton>
      </DashboardHeader>
      <section>
        <Title>
          <h1> Meus Contatos</h1>
          <button onClick={toggleModalAddContact}>
            Adicionar
            <IoMdPersonAdd />
          </button>
        </Title>

        <ContactList>
          <Contacts />
        </ContactList>

        {isOpenModalAddContact && (
          <ModalAddContact toggleModal={toggleModalAddContact} />
        )}

        {isOpenModalUpdateUser && (
          <Modal toggleModal={toggleModalUpdateUser}>Update User</Modal>
        )}
      </section>
    </>
  );
};
