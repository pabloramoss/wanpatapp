import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-self: center;
  align-self: center;
  gap: 1em;
  margin: 2em 0;
  border-radius: 12px;
  padding: 2em;

  p {
    text-align: center;
    margin: 0;
  }

  .register__form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 2em 0;
  }
`;
