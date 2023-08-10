import styled from 'styled-components';

import { SIZES } from '../../../lib/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-width: 300px;
  height: calc(100vh - ${SIZES.chatHeaderHeight});
`;
