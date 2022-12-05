import { Component } from 'react';
import { nanoid } from 'nanoid'

export class Form extends Component{
    state = {
        name: '',
        number: '',
    };

    contactId = nanoid();

    handleInputContact = evt => {
    const { name, value } = evt.currentTarget
    
    this.setState({ [name]: value })
    // console.log(evt);
      };
    
    handleSubmitAddContact = evt => {
        evt.preventDefault()
        // console.log(this.state)

        this.props.onSubmit(this.state)
        this.resetForm()
    };

    resetForm = () => {
        this.setState({ name: '', number: '' })
    };

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
            />
          </label>
          
          <button type='submit'>Add contact</button>
       </form>
        );
    }
}