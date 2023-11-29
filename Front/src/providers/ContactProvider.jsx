import { createContext, useState } from "react";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  return <ContactContext.Provider>{children}</ContactContext.Provider>;
};
