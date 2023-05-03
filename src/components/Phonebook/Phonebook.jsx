import { Component } from "react";
import { nanoid } from "nanoid";
import { PhonebookContainer, PhonebookHeadings, PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn, PhonebookContacts, PhonebookContactsHeading, PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Phonebook.styled";

export class Phonebook extends Component {

    state = {
        contacts: [],
        name: '',
        number: '',
      }

    //   onInputName = e => {
    //     const { name, value } = e.target;
    
    //     console.log(e.currentTarget.value)
    
    //     this.setState({
    //         [name]: value
    //     });
    // }

    onInputName = (e, option) => {
        const { value } = e.currentTarget;
        console.log(value);
        this.setState({
          [option]: value,
        });
      };

    hanleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.setState({
            contacts: [...this.state.contacts, {name: this.state.name, number: this.state.number, id: nanoid()}],
            name: '',
            number: '',
        })

        // this.resetForm();
      }

    // resetForm = () => {
    //     this.setState({
    //         name: '',
    //         number: '',
    //     })
    // }   


    render() {

        return (
   
            <PhonebookContainer>
              <PhonebookHeadings>Phonebook</PhonebookHeadings>
            

             <PhonebookForm onSubmit={this.hanleSubmit}>
           
            <PhonebookFormContainer>
                <PhonebookFormLabel htmlFor="name"> Name: </PhonebookFormLabel> 
                <PhonebookFormInput   type="text"
                                      value={this.state.name} 
                                      name="name"
                                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                      required
                                      placeholder="Enter name"
                                      onChange={this.onInputName} />
            </PhonebookFormContainer>
            
            <PhonebookFormContainer>
                <PhonebookFormLabel htmlFor="number"> Number: </PhonebookFormLabel> 
                <PhonebookFormInput   type="tel"
                                      value={this.state.number} 
                                      name="number"
                                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                      required
                                      placeholder="Tel number"
                                      onChange={this.onInputName} />
            </PhonebookFormContainer>
            
            
                <PhonebookBtn type="submit">Add Contact</PhonebookBtn>

              </PhonebookForm>
            
              <PhonebookContacts>
                <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
                <PhonebookContactsList>
            { this.state.contacts.map(({name, number, id}) => {
                return(
                <PhonebookContactsListItem key={id}>
                    <PhonebookContactsListItemName>{name}:{number}</PhonebookContactsListItemName>
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


