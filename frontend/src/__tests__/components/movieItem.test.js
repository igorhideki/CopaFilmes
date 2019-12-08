import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import MovieItem from '~/components/MovieItem';

describe('Button component', () => {
  it('should call onClick prop when button was clicked', () => {
    const data = {
      titulo: 'Movie test',
      ano: 2000,
      id: 'teste id',
    };

    const { getByTestId } = render(<MovieItem data={data} />);

    fireEvent.click(getByTestId('movieItemLabel'));
    expect(getByTestId('movieItemInput')).toHaveProperty('checked', true);
  });
});
