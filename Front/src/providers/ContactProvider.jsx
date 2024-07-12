import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [contactId, setContactId] = useState(null);

  const fetchContacts = async () => {
    try {
      const response = await api.get("/contacts");
      setContactList(response.data);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const createContact = async (formData) => {
    try {
      const response = await api.post("/contacts", formData);
      // Atualizar a lista de contatos após criar um novo
      fetchContacts();
      toast.success("Contato Cadastrado", { autoClose: 500 });
    } catch (error) {
      toast.error("Contato já cadastrado ou pertence a outro usuário", {
        autoClose: 500,
      });
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await api.delete(`contacts/${id}`);

      toast.success("Contato Deletado", { autoClose: 500 });
    } catch (error) {
      console.error("Erro ao deletar contato:", error);
      toast.error("Erro ao deletar contato", { autoClose: 500 });
    }
  };

  const updateContact = async (id, updatedData) => {
    try {
      const response = await api.patch(`contacts/${id}`, updatedData);

      setContactId(id);
      toast.success("Contato Atualizado", { autoClose: 500 });
    } catch (error) {
      toast.error("Erro ao atualizar contato", { autoClose: 500 });
      console.error("Erro ao atualizar contato:", error);
    }
  };

  const getContactById = async (id) => {
    const response = await api.get(`contacts/${id}`);
    return response.data;
  };

  return (
    <ContactContext.Provider
      value={{
        deleteContact,
        contactList,
        createContact,
        setContactList,
        updateContact,
        contactId,
        getContactById,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
