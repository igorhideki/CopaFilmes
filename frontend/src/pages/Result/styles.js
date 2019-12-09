import styled from 'styled-components';

import { colors } from '~/styles/variables';
import trophyIcon from '~/assets/trophy.svg';

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 24px;

  button {
    margin-top: 16px;
  }
`;

export const Content = styled.div`
  margin-top: 24px;

  > div + div {
    margin-top: 16px;
  }

  button {
    margin-left: auto;
  }
`;

export const Info = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 16px;
  }
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  img {
    margin-left: auto;
    margin-right: 24px;
  }
`;

export const ResultPosition = styled.div`
  background: ${colors.secondary};
  padding: 0 24px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  align-self: stretch;
  display: flex;
  align-items: center;
`;

export const ResultTitle = styled.div`
  padding: 24px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

export const IconWinner = styled.img.attrs({
  src: trophyIcon,
  alt: 'Troféu primeiro lugar',
})`
  height: 40px;
`;

export const IconViceWinner = styled.img.attrs({
  src: trophyIcon,
  alt: 'Troféu segundo lugar',
})`
  height: 40px;
  filter: grayscale(100%);
`;
