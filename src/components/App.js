import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import AddContact from "./AddContact";
import Header from "./Header";
import ContactList from "./ContactList";
import "../App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContact);
  };

  useEffect(() => {
    const reContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(LOCAL_STORAGE_KEY))
    );

    if (reContacts) setContacts(reContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container fullContainer">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
