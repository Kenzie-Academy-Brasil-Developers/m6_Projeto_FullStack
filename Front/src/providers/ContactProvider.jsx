import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  // useEffect(() => {
  //   try { }
  //   const loadContact = async () => {
  //     const response = await api.get("/contacts");
  //     setContactList(response.data);
  //   };
  //   loadContact();
  // }, []);

  useEffect(() => {
    const loadContact = async () => {
      try {
        const response = await api.get("/contacts");
        setContactList(response.data);
      } catch (error) {
        console.log("Algo deu errado");
      }
    };
    loadContact();
  }, []);

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

  return (
    <ContactContext.Provider
      value={{ deleteContact, contactList, createContact, setContactList }}
    >
      {children}
    </ContactContext.Provider>
  );
};
