const { REMOVE_FEATURE, ADD_FEATURE } = require('../reducers/carReducers');

export const removeFeature = feature => {
  //dispatch an action here to remove a feature
  return {type: REMOVE_FEATURE, payload: feature};
};

export const buyItem = feature => {
  //dispatch an action here to add an item
  return {type: ADD_FEATURE, payload: feature};
};