import { newE2EPage } from '@stencil/core/testing';

describe('app-newcase', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-newcase></app-newcase>');

    const element = await page.find('app-newcase');
    expect(element).toHaveClass('hydrated');
  });
});
