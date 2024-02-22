export function filterreducer(state, action) {
  const nwstate = { ...state };
  switch (action.type) {
    case "price": {
      nwstate.priceRange.min = action.min;
      nwstate.priceRange.max = action.max;
    }
    case "color": {
      nwstate.color = action.color;
    }
    case "category": {
      nwstate.category = action.category;
    }
  }
  return nwstate;
}
