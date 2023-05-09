import { Component } from "react";
import { nanoid } from "nanoid";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactList } from "./Contacts/Contacts";
import { PhonebookContainer, PhonebookHeadings, PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn, PhonebookContacts, PhonebookContactsHeading, PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "../components/Phonebook/Phonebook.styled";
import { Filter } from "components/Filter/Filter";

export class App extends Component {

  state = {
      contacts:[],
      filter: '',
      name: '',
      number: '',
    }

  onInputName = (e, option) => {
      const { value } = e.currentTarget;
      // console.log(option);

      this.setState({
        [option]: value
      })

    
    };

    handleSubmit = e => {
      e.preventDefault();
      const { name, number, contacts } = this.state;
  
      const isNameExist = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );
      
      const isNumberExist = contacts.some(
        contact => contact.number === number,
      );
  
      if (isNameExist) {
        alert('Contact with such name already exists!');
        this.resetForm();
        return;
      }
  
      if (isNumberExist) {
        alert('Contact with such number already exists!');
        this.resetForm();
        return;
      }
  
      const newContact = { id: nanoid(), name, number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));

      this.resetForm();
    }

    resetForm = () => {
      this.setState({
          name: '',
          number: '',
      })
    }   

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFilterResult = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.onFilterResult();
      return (
 
          <PhonebookContainer>
            <PhonebookHeadings>Phonebook</PhonebookHeadings>
          
        <AddContactForm 
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          number={this.state.number}
          onInputName={this.onInputName}
        />
            <PhonebookContacts>
              <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
           
        <Filter 
          value={this.state.filter} 
          onChange={this.changeFilter} 
        />

        <ContactList 
          contacts={this.filteredContacts}
          handleDeleteContact={this.handleDeleteContact} 
        />
      
      </PhonebookContacts>
          

          </PhonebookContainer> 
          
          )

  }
 

}

