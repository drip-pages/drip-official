import { Reducer, Action, combineReducers } from 'redux'
import header, { HeaderState } from './header'

export type ReduxState = {
  header: HeaderState
}

export const createReducers = (): Reducer<ReduxState, Action> =>
  combineReducers({
    header,
  })
