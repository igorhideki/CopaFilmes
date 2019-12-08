import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import Header from '~/components/Header';

describe('Header component', () => {
  it('should render the header component correctly', async () => {
    const titleText = 'Title test';
    const preTitleText = 'PreTitle test';
    const descriptionText = 'Description test';
    const { getByText } = render(
      <Header
        title={titleText}
        preTitle={preTitleText}
        description={descriptionText}
      />
    );

    await waitForElement(() => getByText(titleText));
    await waitForElement(() => getByText(preTitleText));
    await waitForElement(() => getByText(descriptionText));
  });
});
