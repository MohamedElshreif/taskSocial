import { IMAGE_PROFILE, ADD_POST } from '../actions/type';

const initState = {
  imgProfile: '',
  posts: [],
  post: {},
};

export default function rootReduser(state = initState, { type, payload }) {
  if (type === IMAGE_PROFILE) {
    return { ...state, imgProfile: payload };
  }
  if (type === ADD_POST) {
    console.log(payload);
    return { ...state, posts: [...state.posts, payload] };
  }
  return state;
}
