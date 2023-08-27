import styled from 'styled-components';

import { COLORS, SIZES } from '../../../lib/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.lightestGrey};
  width: ${SIZES.chatSidebarWidth};
  height: calc(100vh - ${SIZES.chatHeaderHeight});
`;
