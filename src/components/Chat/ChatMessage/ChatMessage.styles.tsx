import styled from "styled-components";

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
    margin-top: 1em;
  }

  .chat-message__conversation {
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
    overflow-y: auto;
    height: 100%;
    border: 1px solid lightgrey;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .chat-message__unselected-message {
    text-align: center;
    color: lightgrey;
  }
`