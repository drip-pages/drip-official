import * as React from 'react'
import { languageType } from '../types/language'
import { connect } from 'react-redux'
import { ReduxState } from '../reducers'
import { Action, Dispatch } from 'redux'
import { RouteComponentProps, withRouter } from 'react-router'
import i18n from 'i18next'
import { setLanguage } from '../actions/translator'
import { setIsShowMenu } from '../actions/header'

type MapDispatchToProps = {
  setLanguage: (language: languageType) => void
  setIsShowMenu: (isShowMenu: boolean) => void
}

type MapStateToProps = {
  language: languageType
}

type TranslatorProps = RouteComponentProps & MapDispatchToProps & MapStateToProps

class Translator extends React.Component<TranslatorProps> {
  constructor(props: TranslatorProps) {
    super(props)
    const { location, setLanguage } = this.props
    if (location.pathname === '/en' || location.pathname === '/en/') {
      i18n.changeLanguage('en')
      setLanguage('en')
    } else {
      i18n.changeLanguage('ja')
      setLanguage('ja')
    }
  }

  // 全てのコンポーネントのrender()が走る前に言語切り替えの処理をする必要があるため、WillUpdateに書く
  componentWillUpdate(nextProps: TranslatorProps): void {
    if (this.props.location !== nextProps.location) {
      const { setLanguage, setIsShowMenu } = this.props
      setIsShowMenu(false)
      if (nextProps.location.pathname === '/en' || nextProps.location.pathname === '/en/') {
        i18n.changeLanguage('en')
        setLanguage('en')
      } else {
        i18n.changeLanguage('ja')
        setLanguage('ja')
      }
    }
  }

  render() {
    return null
  }
}

const mapStateToProps: (state: ReduxState) => MapStateToProps = state => ({
  language: state.translator.language,
})

const mapDispatchToProps: (dispatch: Dispatch<Action>) => MapDispatchToProps = dispatch => ({
  setLanguage: language => dispatch(setLanguage(language)),
  setIsShowMenu: isShowMenu => dispatch(setIsShowMenu(isShowMenu)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Translator))
