import * as React from 'react'
import headerLogo from '../../img/navi.png'
import './Header.scss'
import classNames from 'classnames'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import HamburgerButton from '../HamburgerButton'
import { Translation } from 'react-i18next'
import { connect } from 'react-redux'
import { ReduxState } from '../../reducers'
import { Action, Dispatch } from 'redux'
import { setIsShowMenu } from '../../actions/header'
import { languageType } from '../../types/language'
import { setLanguage } from '../../actions/translator'

const ACCORDION_MENU_CLOSE_WINDOW_WIDTH = 800

type MapDispatchToProps = {
  setIsShowMenu: (isShowMenu: boolean) => void
  setLanguage: (language: languageType) => void
}

type MapStateToProps = {
  isShowMenu: boolean
  language: languageType
}

type HeaderProps = RouteComponentProps & MapDispatchToProps & MapStateToProps

class Header extends React.Component<HeaderProps> {
  componentDidMount(): void {
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    if (window.innerWidth > ACCORDION_MENU_CLOSE_WINDOW_WIDTH) {
      this.props.setIsShowMenu(false)
    }
  }

  handleMenuButton = () => {
    const { isShowMenu, setIsShowMenu } = this.props
    isShowMenu ? setIsShowMenu(false) : setIsShowMenu(true)
  }

  handleOutAreaClick = () => {
    const { isShowMenu, setIsShowMenu } = this.props
    isShowMenu && setIsShowMenu(false)
  }

  render() {
    const { isShowMenu, language } = this.props
    return (
      <div className="Header">
        <div className="fixed-area">
          <div className="header-area">
            <Link to="/">
              <img alt="DRECOM INVENTION PROJECT" src={headerLogo} className="header-logo" />
            </Link>
            <span className="menu-area">
              <span className="native-button">
                <HamburgerButton onClick={this.handleMenuButton} show={isShowMenu} />
              </span>

              <span className="non-native-buttons">
                <Link to="/news">
                  <button className="item"> News </button>
                </Link>
                <a href="https://www.drecom.co.jp/company/" target="_blank" rel="noopener noreferrer">
                  <button className="item"> Company </button>
                </a>
                <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
                  <button className="item"> Contact </button>
                </a>
                <Link to={language === 'ja' ? '/en' : '/'}>
                  <button className="item">
                    <Translation>{t => t('headerButton')}</Translation>
                  </button>
                </Link>
              </span>
            </span>
          </div>
          <div className={classNames('underMenuArea', { show: isShowMenu })}>
            <ul className="accordionMenu">
              <Link to="/news">
                <li className="item">News</li>
              </Link>
              <a href="https://www.drecom.co.jp/company/" target="_blank" rel="noopener noreferrer">
                <li className="item">Company</li>
              </a>
              <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
                <li className="item">Contact</li>
              </a>
              <Link to={language === 'ja' ? '/en' : '/'}>
                <li className="item">
                  <Translation>{t => t('headerButton')}</Translation>
                </li>
              </Link>
            </ul>
            <div className="outArea" onClick={this.handleOutAreaClick} />
          </div>
        </div>
        <div className="padding-area" />
      </div>
    )
  }
}

const mapStateToProps: (state: ReduxState) => MapStateToProps = state => ({
  isShowMenu: state.header.isShowMenu,
  language: state.translator.language,
})

const mapDispatchToProps: (dispatch: Dispatch<Action>) => MapDispatchToProps = dispatch => ({
  setIsShowMenu: isShowMenu => dispatch(setIsShowMenu(isShowMenu)),
  setLanguage: language => dispatch(setLanguage(language)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
