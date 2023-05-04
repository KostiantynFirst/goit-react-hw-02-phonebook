import { Component } from "react";
import { nanoid } from "nanoid";
import { PhonebookContainer, PhonebookHeadings, PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn, PhonebookContacts, PhonebookContactsHeading, PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Phonebook.styled";
import { Filter } from "components/Filter/Filter";

export class Phonebook extends Component {

    state = {
        contacts: [],
        filter: '',
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
        console.log(option);

        this.setState({
          [option]: value
        })

      
      };

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.setState({
            contacts: [...this.state.contacts, {name: this.state.name, number: this.state.number, id: nanoid()}],
            name: '',
            number: '',
        })

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
  
      return contacts.filter(name =>
        name.name.toLowerCase().includes(normalizedFilter),
      );
    };


    render() {

        return (
   
            <PhonebookContainer>
              <PhonebookHeadings>Phonebook</PhonebookHeadings>
            

             <PhonebookForm onSubmit={this.handleSubmit}>
           
            <PhonebookFormContainer>
                <PhonebookFormLabel htmlFor="name"> Name: </PhonebookFormLabel> 
                <PhonebookFormInput   type="text"
                                      value={this.state.name} 
                                      name="name"
                                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                      required
                                      placeholder="Enter name"
                                      onChange={(e) => this.onInputName(e, 'name')} />
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
                                      onChange={(e) => this.onInputName(e, 'number')} />
            </PhonebookFormContainer>
            
            
                <PhonebookBtn type="submit">Add Contact</PhonebookBtn>

              </PhonebookForm>
            
              <PhonebookContacts>
                <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
             
              <Filter value={this.state.filter} onChange={this.changeFilter} />


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


