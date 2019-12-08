import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '~/components/Button';

describe('Button component', () => {
  it('should call onClick prop when button was clicked', () => {
    const onClick = jest.fn();
    const textButton = 'Button test';
    const { getByText } = render(
      <Button onClick={onClick}>{textButton}</Button>
    );

    fireEvent.click(getByText(textButton));
    expect(onClick).toHaveBeenCalled();
  });
});
