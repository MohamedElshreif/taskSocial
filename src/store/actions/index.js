import { IMAGE_PROFILE, ADD_POST } from './type';

export const imageProfile = (value) => {
  return {
    type: IMAGE_PROFILE,
    payload: value,
  };
};

export const addPost = (value) => {
  return {
    type: ADD_POST,
    payload: value,
  };
};
