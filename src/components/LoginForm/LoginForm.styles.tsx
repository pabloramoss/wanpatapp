import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
  padding: 2em;

  .login__info {
    color: lightgray;
    font-size: 0.8em;
  }

  p {
    text-align: center;
    margin: 0;
  }

  .login__form {
    display: grid;
    gap: 0.5em;
  }
`;
