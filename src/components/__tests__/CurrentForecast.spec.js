import { render } from '@testing-library/react';
import { CurrentForecast } from '../CurrentForecast';

describe('Current Forecast', () => {
  it('loads the current weather on first render', () => {
    const loadCurrentForecast = jest.fn().mockName('loadCurrentForecast');

    render(<CurrentForecast loadCurrentForecast={loadCurrentForecast} />);

    expect(loadCurrentForecast).toHaveBeenCalled();
  });
});
