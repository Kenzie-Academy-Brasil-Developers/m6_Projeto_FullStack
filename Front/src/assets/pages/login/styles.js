import { styled } from "styled-components";

export const StyledControllerLogin = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  h1 {
    font-size: 1.5rem;
  }

  div {
    form {
      display: flex;
      flex-direction: column;
      gap: 5px;

      input {
        display: flex;
        flex-direction: column;
        gap: 5px;

        width: 325px;
        height: 50px;
        padding-left: 20px;

        background: #b0b6eb;
        border: 3px solid #6170e3;
        border-radius: 4px;

        color: whitesmoke;
        font-weight: 700;
        font-size: 16px;
      }

      label {
        font-weight: 700;
        font-size: 1rem;
      }

      button {
        color: whitesmoke;
        font-weight: 700;
        font-size: 1rem;

        width: 325px;
        height: 50px;

        background: #6170e3;
        border: 1px solid #6170e3;
        border-radius: 4px;
      }
    }
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
    margin: 5px;
  }
  button {
    color: whitesmoke;
    font-weight: 700;
    font-size: 1rem;

    width: 325px;
    height: 50px;

    background: #b0b6eb;
    border: 1px solid #6170e3;
    border-radius: 4px;
  }
`;
