import { currentApiMockData } from '../fixtures/current';
import API_KEY from '../../src/apiKey';

describe('Getting Current forecast', () => {
  it('should show weather for a given lat/long', () => {
    const DetroitCoords = { lat: 42.33143, long: -83.0458 };
    const responseCityName = 'Detroit';
    cy.server({ force404: false });

    cy.route({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${DetroitCoords.lat}&lon=${DetroitCoords.long}&appid=${API_KEY}`,
      response: currentApiMockData,
    });

    cy.visit('/');
    cy.contains(responseCityName);
  });
});
