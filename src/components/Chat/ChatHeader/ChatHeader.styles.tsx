import styled from 'styled-components';

import { SIZES, COLORS } from '../../../lib/styles';

export const Container = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5em;
  height: ${SIZES.chatHeaderHeight};
  background-color: ${COLORS.lightGrey};

  .chat-heaeder__user {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`;
