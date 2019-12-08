import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Header from '~/components/Header';
import Button from '~/components/Button';
import MovieList from '~/components/MovieList';

import api from '~/services/api';
import { startChampionshipRequest } from '~/store/modules/championship/actions';

import { Container, Wrapper, CounterInfo, CounterLabel } from './styles';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const { moviesSelected } = useSelector(state => state.championship);
  const moviesAmount = moviesSelected.length;
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('/movies');

      setMovies(response.data);
    }

    loadMovies();
  }, []);

  function handleChampionship() {
    if (moviesAmount < 8) {
      toast.info('Selecione 8 filmes para gerar o campeonato!');
    } else {
      dispatch(startChampionshipRequest(moviesSelected));
    }
  }

  return (
    <Container>
      <Header
        title="Fase de Seleção"
        description="Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar meu Campeonato para prosseguir"
      />
      <Wrapper>
        <div>
          <CounterLabel>Selecionados</CounterLabel>
          <CounterInfo>{moviesAmount} de 8 filmes</CounterInfo>
        </div>
        <Button onClick={handleChampionship}>Gerar meu Campeonato</Button>
      </Wrapper>
      <MovieList movies={movies} />
    </Container>
  );
}
