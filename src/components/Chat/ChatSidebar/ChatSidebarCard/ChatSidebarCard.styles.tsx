import styled from 'styled-components';

import { SIZES, COLORS } from '../../../../lib/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  height: ${SIZES.chatSidebarCardHeight};

  .sidebar-card__unread-messages {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .sidebar-card__content {
    display: grid;
  }

  .sidebar-card__username {
    margin: 0;
    font-weight: bold;
  }

  .sidebar-card__message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    color: ${COLORS.darkGrey};
  }

  .sidebard-card__timestamp {
    font-size: 0.8rem;
    margin: 0;
  }

  &:hover {
    background-color: ${COLORS.lightestGrey};
  }
`;
