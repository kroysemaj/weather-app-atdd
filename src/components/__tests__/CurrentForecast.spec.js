import { render } from '@testing-library/react';
import { CurrentForecast } from '../CurrentForecast';

describe('Current Forecast', () => {
  const forecast = { name: 'Detroit' };
  let loadCurrentForecast;
  let subject;

  beforeEach(() => {
    loadCurrentForecast = jest.fn().mockName('loadCurrentForecast');

    subject = render(
      <CurrentForecast
        loadCurrentForecast={loadCurrentForecast}
        forecast={forecast}
      />,
    );
  });

  it('loads the current weather on first render', () => {
    expect(loadCurrentForecast).toHaveBeenCalled();
  });

  it('displays the name of city of the forecast', () => {
    const noop = () => {};

    const { queryByText } = subject;

    expect(queryByText('Detroit')).not.toBeNull();
  });
});
