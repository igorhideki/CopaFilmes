import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '~/components/Header';
import Button from '~/components/Button';

import history from '~/services/history';
import { resetChampionship } from '~/store/modules/championship/actions';

import {
  Container,
  Content,
  Info,
  ResultItem,
  ResultPosition,
  ResultTitle,
  IconWinner,
  IconViceWinner,
} from './styles';

export default function Result() {
  const { winner, viceWinner } = useSelector(
    state => state.championship.winners
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(resetChampionship());
  });

  return (
    <Container>
      <Header
        title="Resultado Final"
        description="Veja o resultado final do Campeonato de filmes de forma simples e rápida"
      />

      {winner ? (
        <Content>
          <ResultItem>
            <ResultPosition>1º</ResultPosition>
            <ResultTitle>{winner.titulo}</ResultTitle>
            <IconWinner />
          </ResultItem>
          <ResultItem>
            <ResultPosition>2º</ResultPosition>
            <ResultTitle>{viceWinner.titulo}</ResultTitle>
            <IconViceWinner />
          </ResultItem>
          <Button onClick={() => history.push('/')}>
            Gerar um novo Campeonato
          </Button>
        </Content>
      ) : (
        <Info>
          <p>Nenhum filme foi selecionado para este campeonato.</p>
          <Button onClick={() => history.push('/')}>Selecionar filmes</Button>
        </Info>
      )}
    </Container>
  );
}
