import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import MovieItem from '~/components/MovieItem';

describe('Button component', () => {
  it('should call onClick prop when button was clicked', () => {
    const data = {
      nome: 'Movie test',
      ano: 'Ano test',
      id: 'teste id',
    };

    const { getByTestId } = render(<MovieItem data={data} />);

    fireEvent.click(getByTestId('movieItemLabel'));
    expect(getByTestId('movieItemInput')).toHaveProperty('checked', true);
  });
});
