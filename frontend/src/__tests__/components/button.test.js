import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '~/components/Button';

describe('Button component', () => {
  it('should call onClick prop when button was clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick}>Button test</Button>
    );

    fireEvent.click(getByText('Button test'));
    expect(onClick).toHaveBeenCalled();
  });
});
