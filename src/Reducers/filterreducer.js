export function filterreducer(state, action) {
  const nwstate = { ...state };
  switch (action.type) {
    case "price": {
      nwstate.priceRange.min = action.min;
      nwstate.priceRange.max = action.max;
      return nwstate;
    }
    case "color": {
      nwstate.color = action.color;
      return nwstate;
    }
    case "category": {
      nwstate.category = action.category;
      return nwstate;
    }
  }
}
