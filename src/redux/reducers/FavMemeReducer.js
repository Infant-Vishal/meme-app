const initialState = {
  favMemeArr: [],
};

const FavMemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDFAVMEME":
      return {
        ...state,
        favMemeArr: [...state.favMemeArr, action.payload],
      };
    case "DELETEFAVMEME":
      return {
        ...state,
        favMemeArr: [
          ...state.favMemeArr.filter((meme) => meme.id !== action.payload.id),
        ],
      };
    case "CLEARPERSISTEDDATA":
      return initialState;
    default:
      return state;
  }
};

export default FavMemeReducer;
