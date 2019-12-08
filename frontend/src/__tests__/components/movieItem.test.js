import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import MovieItem from '~/components/MovieItem';

jest.mock('react-redux');

describe('Button component', () => {
  it('should dispatch action when button was clicked', () => {
    const data = {
      titulo: 'Movie test',
      ano: 2000,
      id: 'teste id',
    };

    useSelector.mockImplementation(cb =>
      cb({
        championship: {
          moviesSelected: [],
        },
      })
    );

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(<MovieItem data={data} />);

    fireEvent.click(getByTestId('movieItemLabel'));

    expect(dispatch).toHaveBeenCalled();
  });
});
