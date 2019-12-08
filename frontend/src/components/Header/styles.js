import styled from 'styled-components';
import { gradient, colors } from '~/styles/variables';

export const Container = styled.div`
  background: ${gradient.main};
  color: #fff;
  padding: 56px 24px;
  border-radius: 24px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  position: relative;
  padding-bottom: 8px;
  margin-bottom: 16px;
  letter-spacing: 1px;

  &:after {
    content: ' ';
    width: 20px;
    height: 2px;
    background: ${colors.lightGray};
    position: absolute;
    top: 100%;
    left: calc(50% - 10px);
  }
`;

export const PreTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 4px;
  color: ${colors.lightGray};
`;

export const Description = styled.p`
  font-size: 14px;
  max-width: 480px;
  margin: 0 auto;
`;
