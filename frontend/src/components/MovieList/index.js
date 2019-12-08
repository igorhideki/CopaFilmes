import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import MovieItem from '~/components/MovieItem';
import { Container, Loading } from './styles';
import { colors } from '~/styles/variables';

export default function MovieList({ movies }) {
  return (
    <>
      <Container>
        {movies.map(movie => (
          <li key={movie.id}>
            <MovieItem data={movie} />
          </li>
        ))}
      </Container>
      {!movies.length && (
        <Loading>
          <FaSpinner size={24} color={colors.secondary} />
          <span>Carregando filmes...</span>
        </Loading>
      )}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      titulo: PropTypes.string,
      ano: PropTypes.number,
    })
  ),
};

MovieList.defaultProps = {
  movies: [],
};
