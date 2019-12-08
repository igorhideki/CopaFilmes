import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from '../../styles/variables';

export const Container = styled.button`
  background: ${colors.primary};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  padding: 0 24px;
  border-radius: 8px;
  transition: background 0.2s;
  border: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${darken(0.05, colors.primary)};
  }

  > svg {
    margin-right: 6px;
  }
`;
