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

export const Dashboard = () => {
  const { userLogout, user } = useAuth();
  const { deleteContact } = useContact();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/contacts");
      setContacts(response.data);
    })();
  }, [contacts]);

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
          <UpdateButton>
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
          <button>
            Adicionar
            <IoMdPersonAdd />
          </button>
        </Title>

        <ContactList>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <ContactContainer>
                <ContactName>
                  <p>
                    <IoMdPerson />
                  </p>
                  <span>{contact.full_name}</span>
                </ContactName>
                <ContactEmail>
                  <span>
                    <a href={`mailto:${contact.email}`}>
                      <MdEmail />
                    </a>
                  </span>
                  <p>{contact.email}</p>
                </ContactEmail>
                <ContactPhone>
                  <span>
                    <a
                      className="phone-link"
                      href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                        contact.phone
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquarePhone />
                    </a>
                  </span>
                  <p>{contact.phone}</p>
                </ContactPhone>
                <ContactCreated>{contact.createdAt}</ContactCreated>
              </ContactContainer>

              <ButtonContainer>
                <UpdateButtonContact>
                  <GrDocumentUpdate />
                </UpdateButtonContact>
                <DeleteButtonContact onClick={() => deleteContact(contact.id)}>
                  <MdDeleteForever />
                </DeleteButtonContact>
              </ButtonContainer>
            </li>
          ))}
        </ContactList>
      </section>
    </>
  );
};
