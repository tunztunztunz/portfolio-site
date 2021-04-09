import styled from 'styled-components';

const FormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  align-items: center;
  label {
    font-size: 1.25rem;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid var(--color-text);
    font-size: 1.25rem;
  }
  .form-header {
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
  .buttons {
    display: flex;
    justify-content: center;
    Button {
      min-width: 85px;
      width: 25%;
      margin: 0 1rem;
    }
  }
`;

export default FormStyles;
