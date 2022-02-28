export const SAVE_COORDINATES = 'SAVE_COORDINATES';

export const getCoordinates = () => (dispatch, getState, api) => {
  console.log('#getCoordinates');
  dispatch(
    saveCoordinates({
      latitude: 44,
      longitude: 44,
    }),
  );
};

export const saveCoordinates = coordinates => ({
  type: SAVE_COORDINATES,
  payload: coordinates,
});
