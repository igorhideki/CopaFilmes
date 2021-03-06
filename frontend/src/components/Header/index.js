import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, PreTitle, Description } from './styles';

export default function Header({ title, description }) {
  return (
    <Container>
      <PreTitle>Campeonato de filmes</PreTitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
