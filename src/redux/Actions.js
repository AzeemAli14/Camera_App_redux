export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export function addImage(image) {
  return {
    type: ADD_IMAGE,
    payload: image,
  };
}

export function removeImage(image) {
  return {
    type: REMOVE_IMAGE,
    payload: image,
  };
}
