import { Component } from "react";
import { nanoid } from "nanoid";
import { PhonebookContainer, PhonebookHeadings, PhonebookForm, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn, PhonebookContacts, PhonebookContactsHeading, PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Phonebook.styled";

export class Phonebook extends Component {

    state = {
        contacts: [],
        name: '',
        number: '',
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
                <PhonebookFormLabel htmlFor="name">Name:
                <PhonebookFormInput   type="text"
                                      value={this.state.name} 
                                      name="name"
                                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                      required
                                      placeholder="Enter name"
                                      onChange={this.onInputName} />
             </PhonebookFormLabel>

                {/* <PhonebookFormLabel htmlFor="number">Number:</PhonebookFormLabel>
                <PhonebookFormInput 
                                      type="tel"
                                      name="number"
                                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                      required
                                     /> */}
            
                <PhonebookBtn type="submit">Add Contact</PhonebookBtn>

              </PhonebookForm>
            
              <PhonebookContacts>
                <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
                <PhonebookContactsList>
            { this.state.contacts.map(({name, id}) => {
                return(
                <PhonebookContactsListItem key={id}>
                    <PhonebookContactsListItemName>{name}</PhonebookContactsListItemName>
                    <DeleteBtn>Delete</DeleteBtn>
                </PhonebookContactsListItem>
                )


            })

            }
             </PhonebookContactsList>
                
    
              </PhonebookContacts>
            </PhonebookContainer> 
            
            )

    }
   

}


