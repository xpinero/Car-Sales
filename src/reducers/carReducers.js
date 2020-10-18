export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 72900,
    name: '2020 Ford Shelby GT 500',
    images: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'Borla Exhaust', price: 2500},
    { id: 2, name: "Racing stripes", price: 1500 },
    { id: 3, name: "Premium BOSE system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
    { id: 5, name: 'Vented hood', price: 450},
    { id: 6, name: 'Wide body kit', price: 700},
    { id: 7, name: 'NOS', price: 1600},
    { id: 8, name: 'Brembo Brakes', price: 1200},
    { id: 9, name: 'Steeda suspension pack', price: 3400},
    { id: 10, name: 'Wipple supercharger', price: 8995},
  ],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      //action.payload = feature object
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalFeatures: state.additionalFeatures.filter(
          (feature) => feature.id !== action.payload.id
        ),
        additionalPrice: state.additionalPrice + action.payload.price,
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (feature) => feature.id !== action.payload.id
          ),
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price,
      };

    default:
      return state;
  }
};

export default carReducer;