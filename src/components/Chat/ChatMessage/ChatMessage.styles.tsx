import styled from 'styled-components';

import { COLORS, SIZES } from '../../../lib/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  width: 100%;
  height: 100vh;
  position: relative;

  .chat-message__loader {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5em;
  }

  .chat-message__header {
    height: ${SIZES.chatHeaderHeight};
    text-align: center;
    margin: 0;
    font-weight: bold;
    background-color: ${COLORS.lightGrey};
    border-left: 1px solid lightgrey;
  }

  .chat-message__conversation {
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
    overflow-y: auto;
    height: 100%;
    border: 1px solid lightgrey;
    background-color: white;
  }

  .chat-message__unselected-message {
    text-align: center;
    color: lightgrey;
  }

  .chat-message__input {
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid lightgrey;
    padding: 0.5em;
    background-color: white;
    resize: none;
    border: none;
    margin: 10px 0;
    &:focus {
      outline: none;
    }
  }
`;
