import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCurrentForecast } from '../store/current/actions';

export const CurrentForecast = ({ loadCurrentForecast, forecast }) => {
  useEffect(() => {
    loadCurrentForecast();
  }, [loadCurrentForecast]);

  return (
    <div>
      <h3>{forecast.name}</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  forecast: state.current.forecast,
});

const mapDispatchToProps = { loadCurrentForecast };

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForecast);
