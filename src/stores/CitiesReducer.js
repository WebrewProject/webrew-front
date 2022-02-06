const initialState = []

export const ADD_CITIES = 'ADD_CITIES'

export function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CITIES:
      return [...action.payload]
    default:
      return state
  }
}

