import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [contactId, setContactId] = useState(null);

  const createContact = async (formData) => {
    try {
      const response = await api.post("/contacts", formData);
      setContactList((prevContactList) => [...prevContactList, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await api.delete(`contacts/${id}`);
      console.log(`Contact with ID ${id} deleted successfully`);
      setContactList((prevContactList) =>
        prevContactList.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const updateContact = async (id, updatedData) => {
    try {
      const response = await api.patch(`contacts/${id}`, updatedData);
      setContactList((prevContactList) =>
        prevContactList.map((contact) =>
          contact.id === id ? response.data : contact
        )
      );
      setContactId(id);

      console.log(`Contact with ID ${id} updated successfully`);
    } catch (error) {
      console.error("Erro ao atualizar contato:", error);
    }
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
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
