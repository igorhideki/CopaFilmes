import styled from 'styled-components';

import { colors, breakingPoints } from '~/styles/variables';

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  align-items: center;

  @media (max-width: ${breakingPoints.xs}) {
    flex-direction: column;
    text-align: center;

    button {
      margin-top: 10px;
      width: 100%;
      justify-content: center;
    }
  }
`;

export const CounterLabel = styled.p`
  font-size: 14px;
  color: ${colors.darkGray};
`;

export const CounterInfo = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkGray};
`;
