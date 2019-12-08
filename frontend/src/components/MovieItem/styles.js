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
  transition: all 0.2s ease-out;
  cursor: pointer;

  > div + div {
    margin-left: 8px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
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
