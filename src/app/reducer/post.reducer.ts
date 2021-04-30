import * as PostActions from '../actions/post.actions';
import {UserDto} from '../dto/user-dto';

export type Action = PostActions.All;

// Default app state
const defaultState: UserDto = {
  firstName: 'Mike',
  lastName: 'Jordan',
  phoneNumber: 23,
  email: 'jordan23@gmail.com',
  monthlyAdvertisingBudget: 2000000
};

// Helper function to create new state object

const newState = (state: any, newData: any) => {
  return Object.assign({}, state, newData);
};

// Reducer function
export function postReducer(state: UserDto = defaultState, action: Action) {

  switch (action.type) {
    case PostActions.CREATE_USER:
      return newState(state, {text: action.payload});

    case PostActions.RESET:
      return defaultState;

    default:
      return state;
  }
}


