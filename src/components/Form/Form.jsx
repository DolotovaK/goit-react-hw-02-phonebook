import { Component } from 'react';
import { nanoid } from 'nanoid'

export class Form extends Component{
    state = {
        name: '',
        number: '',
    };

    contactId = nanoid();

    handleInputContact = evt => {
        evt.preventDefault();
        const { name, value } = evt.currentTarget;
    
        this.setState({ [name]: value });
    // console.log(evt);
      };
    
    handleSubmitAddContact = evt => {
        evt.preventDefault()
        // console.log(this.state)
        const {name, number} = evt.target.elements

        this.props.onSubmit(name.value, number.value)
        name.value = '';
        number.value = '';
        // this.resetForm()
    };

    // resetForm = () => {
    //     this.setState({ name: '', number: '' })
    // };

    render() {
        return ( 
            <form onSubmit={this.handleSubmitAddContact}>
           <label htmlFor={this.contactId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputContact}
              id={this.contactId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </label>
          <label htmlFor={this.contactId}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputContact}
              id={this.contactId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
          </label>
          
          <button type='submit'>Add contact</button>
       </form>
        );
    }
}