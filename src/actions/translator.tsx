import { Action } from 'redux'
import { languageType } from '../types/language'

export enum ActionTypes {
  SET_LANGUAGE = '@Drip/translator/SET_LANGUAGE',
}

interface SetLanguage extends Action {
  type: ActionTypes.SET_LANGUAGE
  payload: {
    language: languageType
  }
}

export const setLanguage = (language: languageType): SetLanguage => ({
  type: ActionTypes.SET_LANGUAGE,
  payload: {
    language,
  },
})

export type TranslatorActions = SetLanguage
