import { Component } from "react";
import { nanoid } from "nanoid";
import { PhonebookContainer, PhonebookHeadings, PhonebookForm, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn, PhonebookContacts, PhonebookContactsHeading, PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Phonebook.styled";

export class Phonebook extends Component {

    state = {
        contacts: [],
        name: ''
      }

    // nameInputId = nanoid();

    onInputName = e => {
        const {name, value} = e.currentTarget;

        console.log(e.currentTarget.value)
   
        this.setState({
            [name]: value
        })
    }

    hanleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.setState({
            contacts: [...this.state.contacts, {name: this.state.name, id: nanoid()}],
            name: ''
        })

        this.resetForm();
      }

    resetForm = () => {
        this.setState({
            name: '',
        })
    }   


    render() {

        return (
   
            <PhonebookContainer>
              <PhonebookHeadings>Phonebook</PhonebookHeadings>
            
              <PhonebookForm onSubmit={this.hanleSubmit}>
                <PhonebookFormLabel htmlFor="name">Name:</PhonebookFormLabel>
                <PhonebookFormInput   type="text"
                                      value={this.state.name} 
                                      name="name"
                                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                      required
                                      placeholder="Enter name"
                                      onChange={this.onInputName} />
            
                <PhonebookBtn type="submit">Add Contact</PhonebookBtn>
              </PhonebookForm>
            
              <PhonebookContacts>
                <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
                <PhonebookContactsList>
            { this.state.contacts.map(contact => {
                const { name, id} = contact
                console.log(name);
                console.log(id);
                <PhonebookContactsListItem id={id}>
                <PhonebookContactsListItemName>{name}</PhonebookContactsListItemName>
                <DeleteBtn>Delete</DeleteBtn>
              </PhonebookContactsListItem>

            })

            }
             </PhonebookContactsList>
                
    
              </PhonebookContacts>
            </PhonebookContainer> 
            
            )

    }
   

}


