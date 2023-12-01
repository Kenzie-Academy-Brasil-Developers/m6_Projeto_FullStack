import styled from "styled-components";

export const ModalContainerAddContact = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    gap: 5px;

    input {
      border: 1px solid black;
      height: 25px;
      padding-left: 5px;

      ::placeholder {
        color: black;
      }
    }
    div {
      display: flex;

      justify-content: center;
      align-items: center;
      button {
        padding-top: 5px;
      }
    }
  }
`;
