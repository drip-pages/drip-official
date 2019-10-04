import { Reducer, Action, combineReducers } from 'redux'
import header, { HeaderState } from './header'
import translator, { TranslatorState } from './translator'

export type ReduxState = {
  header: HeaderState
  translator: TranslatorState
}

export const createReducers = (): Reducer<ReduxState, Action> =>
  combineReducers({
    header,
    translator,
  })
