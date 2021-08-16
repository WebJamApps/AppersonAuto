const initialState = {
  books: [],
};

const reducer = (state = initialState, action: { type: any; data: any[]; }): Record<string, unknown> => {
  switch (action.type) {
    case 'GOT_BOOKS':
      return {
        ...state,
        books: Array.isArray(action.data) ? action.data.reverse() : [],
      };
    default:
      return state;
  }
};

export default reducer;
