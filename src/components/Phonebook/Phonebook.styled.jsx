import styled from "styled-components";

export const PhonebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const PhonebookHeadings = styled.h2`
  font-family: Arial, sans-serif;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const PhonebookFormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PhonebookFormLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
  width: 100px;
`;

export const PhonebookFormInput = styled.input`
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
`;

export const PhonebookBtn = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #006b8f;
  }
`;

export const PhonebookContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhonebookContactsHeading = styled.h3`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

export const PhonebookContactsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const PhonebookContactsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PhonebookContactsListItemName = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;