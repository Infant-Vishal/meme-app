export const clearPersistedData = () => {
  return {
    type: "CLEARPERSISTEDDATA",
  };
};

export const addFavMeme = (meme) => {
  return {
    type: "ADDFAVMEME",
    payload: meme,
  };
};

export const deleteFavMeme = (meme) => {
  return {
    type: "DELETEFAVMEME",
    payload: meme,
  };
};
