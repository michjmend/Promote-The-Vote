import { GET_ARTICLES } from "../types";


//takes the context you created
export default (state, action) => {
  return [...state, action.payload];
}
