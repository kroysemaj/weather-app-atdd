import { render } from '@testing-library/react';
import { CurrentForecast } from '../CurrentForecast';

describe('Current Forecast', () => {
  it('loads the current weather on first render', () => {
    const loadCurrentForecast = jest.fn().mockName('loadCurrentForecast');

    render(
      <CurrentForecast
        loadCurrentForecast={loadCurrentForecast}
        forecast={{}}
      />,
    );

    expect(loadCurrentForecast).toHaveBeenCalled();
  });

  it('displays the name of city of the forecast', () => {
    const noop = () => {};
    const forecast = { name: 'Detroit' };

    const { queryByText } = render(
      <CurrentForecast loadCurrentForecast={noop} forecast={forecast} />,
    );

    expect(queryByText('Detroit')).not.toBeNull();
  });
});
