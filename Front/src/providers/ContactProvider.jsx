import { createContext, useState } from "react";
import { api } from "../services/api";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [contactSelected, setContactSelected] = useState({});
  const deleteContact = async (id) => {
    try {
      await api.delete(`contacts/${id}`);
      setContactList((prevContactList) =>
        prevContactList.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider value={{ deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
