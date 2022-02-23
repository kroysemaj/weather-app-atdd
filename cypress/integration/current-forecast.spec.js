import { currentMockData } from '../fixtures/current';

describe('Getting Current forecast', () => {
  const API_KEY = 'bd9fd5f9e16dae5895c5d1b1992f5ba7';
  const DetroitCoords = { lat: 42.33143, long: -83.0458 };
  const responseCityName = 'Detroit';

  it('should show weather for a given lat/long', () => {
    const cityName = 'Detroit';

    cy.server({ force404: true });

    cy.route({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${DetroitCoords.lat}&lon=${DetroitCoords.long}&appid=${API_KEY}`,
      response: currentMockData,
    });

    cy.visit('/');
    cy.contains(responseCityName);
  });
});
