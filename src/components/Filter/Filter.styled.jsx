import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;