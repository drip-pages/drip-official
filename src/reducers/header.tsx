import { ActionTypes, HeaderActions } from '../actions/header'

export type HeaderState = {
  isShowMenu: boolean
}

export const defaultState: HeaderState = {
  isShowMenu: false,
}

const Header = (state: HeaderState = defaultState, action: HeaderActions) => {
  switch (action.type) {
    case ActionTypes.SET_IS_SHOW_MENU:
      return { ...state, isShowMenu: action.payload.isShowMenu }
    default:
      return state
  }
}

export default Header
