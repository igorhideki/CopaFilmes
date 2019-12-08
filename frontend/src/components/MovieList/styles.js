import styled from 'styled-components';

import { breakingPoints } from '~/styles/variables';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  list-style: none;

  @media (max-width: ${breakingPoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakingPoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakingPoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Loading = styled.div`
  display: flex;

  svg {
    animation: spin 1.5s infinite linear;
  }

  span {
    margin-left: 8px;
    font-size: 16px;
  }
`;
