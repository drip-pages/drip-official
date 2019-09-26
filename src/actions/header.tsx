import { Action } from 'redux'

export enum ActionTypes {
  SET_IS_SHOW_MENU = '@Drip/header/SET_IS_SHOW_MENU',
}

interface SetIsShowMenu extends Action {
  type: ActionTypes.SET_IS_SHOW_MENU
  payload: {
    isShowMenu: boolean
  }
}

export const setIsShowMenu = (isShowMenu: boolean): SetIsShowMenu => ({
  type: ActionTypes.SET_IS_SHOW_MENU,
  payload: {
    isShowMenu,
  },
})

export type HeaderActions = SetIsShowMenu
