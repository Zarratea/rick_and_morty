
 export const REMOVE_CHARACTER="REMOVE_CHARACTER"
 export const ADD_CHARACTER="ADD_CHARACTER"

export const addFavorite = (Character) => {
    return { type: ADD_CHARACTER, payload: Character };
  };

export const removeFavorite = (id) => {
    return { type: REMOVE_CHARACTER, payload: id };
  };