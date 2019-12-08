import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

import { Container, MovieName, MovieYear } from './styles';
import { colors } from '~/styles/variables';

export default function MovieItem({ data }) {
  const [check, setCheck] = useState(false);

  function handleCheck(e) {
    setCheck(e.target.checked);
  }

  return (
    <label htmlFor={data.id} data-testid="movieItemLabel">
      <Container>
        <div>
          {check ? (
            <MdCheckBox size={24} color={colors.secondary} />
          ) : (
            <MdCheckBoxOutlineBlank size={24} color={colors.secondary} />
          )}
        </div>

        <div>
          <MovieName>{data.nome}</MovieName>
          <MovieYear>{data.ano}</MovieYear>
        </div>
        <input
          type="checkbox"
          name={data.nome}
          id={data.id}
          data-testid="movieItemInput"
          onChange={handleCheck}
          hidden
        />
      </Container>
    </label>
  );
}

MovieItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    ano: PropTypes.string.isRequired,
  }).isRequired,
};
