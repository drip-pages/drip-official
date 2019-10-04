import { ActionTypes, TranslatorActions } from '../actions/translator'
import { languageType } from '../types/language'

export type TranslatorState = {
  language: languageType
}

export const defaultState: TranslatorState = {
  language: 'ja',
}

const Translator = (state: TranslatorState = defaultState, action: TranslatorActions) => {
  switch (action.type) {
    case ActionTypes.SET_LANGUAGE:
      return { ...state, language: action.payload.language }
    default:
      return state
  }
}

export default Translator
