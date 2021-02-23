import { UserAction, User } from '../actions/userActions'

type UserState = {
  user:  User,
  error: string | undefined
}

const initialState = {
  user: {} as User,
  error: undefined
}

const UserReducer = (state: UserState = initialState, action: UserAction) => {
  switch(action.type) {
    case 'ON_SIGNIN':
      return {
        ...state,
        user: action.payload
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
        return state
  }
}

export { UserReducer }