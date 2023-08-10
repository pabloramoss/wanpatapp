import styled from "styled-components";
import { COLORS } from "../../../../lib/styles";

interface ContainerProps {
  owner: boolean;
}

export const Container = styled.div<ContainerProps>`
  opacity: 1;
  display: flex;
  padding: .5em;
  background-color: ${({ owner }) => (owner ? COLORS.lightGrey : COLORS.lightestGrey)};
  align-self: ${({ owner }) => (owner ? "flex-end" : "flex-start")};
  border-radius: 12px;

  .chat-message__text {
    margin: .5em;
  }

  .chat-message__time {
    font-size: .8em;
    color: ${COLORS.darkGrey};
    text-align: right;
    align-self: flex-end;
  }
`