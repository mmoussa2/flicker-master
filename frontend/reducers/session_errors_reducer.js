import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
} from '../actions/session_actions';
import { RECEIVE_SESSION_MODAL } from '../actions/session_modal_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_MODAL:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
