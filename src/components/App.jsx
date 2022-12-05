import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import initialContacts from '../contacts.json';
import { Form } from "./Form/Form";


export class App extends Component {
  state = {
    contacts: initialContacts,
  
  }

  formSubmitHandler = data => {
    console.log(data);
  
}

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  render() {
    const {contacts} = this.state
    return (
      <>
        <h1>заголовок</h1>
        <Form onSubmit={this.formSubmitHandler } />
        
        {/* <ContactList contacts={contacts} onDeleteContact={this.deleteContact} /> */}
      </>
    )
  }
}


