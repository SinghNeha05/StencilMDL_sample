import { newE2EPage } from '@stencil/core/testing';

describe('app-cases', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-cases></app-cases>');

    const element = await page.find('app-cases');
    expect(element).toHaveClass('hydrated');
  });
});
