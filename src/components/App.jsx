import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { initialContacts } from '../contacts.json';
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  onChangeFilter = evt => {
    const { value } = evt.currentTarget;
    this.setState({ filter: value });
  };

  onGetFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  addContact = (name, number)=> {
   const isExist = this.state.contacts.find(contact => {
      return contact.name === name;
   });
    
    if (isExist) return alert(`${name} is already in contacts.`);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, {name, id: nanoid(), number}]
    }));

    this.setState({ name: '', number: '' });
  };


  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  render() {
    const { filter } = this.state
    const filteredContacts = this.onGetFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}


