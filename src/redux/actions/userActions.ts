import api  from '../../service/api'
import { Dispatch } from 'react'


export interface User {
  id: string;
  email: string;
  password: string;
}

export interface SignInAction {
  readonly type: 'ON_SIGNIN';
  payload: User;
}

export interface ErrorAction {
  readonly type: 'ERROR';
  payload: any;
}

export type UserAction = SignInAction | ErrorAction


export const onSignIn = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await api.post<User>('/signin/user', {
        // id,
        email,
        password
      })
      if(!response) {
        dispatch({
          type: 'ERROR',
          payload: 'Login issue with API'
        })
      } else {
        dispatch({
          type: 'ON_SIGNIN',
          payload: response.data
        })
      }
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }

  }

}