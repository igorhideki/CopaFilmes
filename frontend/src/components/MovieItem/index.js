import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

import { addMovie } from '~/store/modules/championship/actions';
import { Container, MovieName, MovieYear } from './styles';
import { colors } from '~/styles/variables';

export default function MovieItem({ data }) {
  const { moviesSelected } = useSelector(state => state.championship);
  const checked = useMemo(
    () => !!moviesSelected.find(movie => movie.id === data.id),
    [data.id, moviesSelected]
  );
  const dispacth = useDispatch();

  function handleCheck() {
    dispacth(addMovie(data));
  }

  return (
    <label htmlFor={data.id} data-testid="movieItemLabel">
      <Container>
        <div>
          {checked ? (
            <MdCheckBox size={24} color={colors.secondary} />
          ) : (
            <MdCheckBoxOutlineBlank size={24} color={colors.secondary} />
          )}
        </div>

        <div>
          <MovieName>{data.titulo}</MovieName>
          <MovieYear>{data.ano}</MovieYear>
        </div>
        <input
          type="checkbox"
          name={data.titulo}
          id={data.id}
          data-testid="movieItemInput"
          onChange={handleCheck}
          checked={checked}
          hidden
        />
      </Container>
    </label>
  );
}

MovieItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired,
  }).isRequired,
};
