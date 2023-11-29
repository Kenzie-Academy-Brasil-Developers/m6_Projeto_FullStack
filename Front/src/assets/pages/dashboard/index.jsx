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
} from "./styles";
import { api } from "../../../services/api";

export const Dashboard = () => {
  const { userLogout, user } = useAuth();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/contacts");

      setContacts(response.data);
    })();
  }, []);

  return (
    <>
      <DashboardHeader>
        <UpdateButton>Atualizar</UpdateButton>
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
                <p>
                  <IoMdPerson /> {contact.full_name}
                </p>
                <p>
                  <MdEmail />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
                <p>
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
                  {contact.phone}
                </p>

                <p>{contact.createdAt}</p>
              </ContactContainer>

              <ButtonContainer>
                <UpdateButtonContact>
                  <GrDocumentUpdate />
                </UpdateButtonContact>
                <DeleteButtonContact>
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
