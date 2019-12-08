import styled from 'styled-components';

import { colors } from '~/styles/variables';

export const Container = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 80px;

  > div + div {
    margin-left: 8px;
  }
`;

export const MovieName = styled.span`
  display: block;
  font-weight: bold;
  color: ${colors.darkGray};
`;

export const MovieYear = styled.span`
  display: block;
  color: ${colors.gray};
`;
