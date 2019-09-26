import * as React from 'react'
import headerLogo from '../../img/navi.png'
import './Header.scss'
import classNames from 'classnames'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import HamburgerButton from '../HamburgerButton'
import { Translation } from 'react-i18next'
import i18n from 'i18next'
import { connect } from 'react-redux'
import { ReduxState } from '../../reducers'
import { Action, Dispatch } from 'redux'
import { setIsShowMenu } from '../../actions/header'

type MapDispatchToProps = {
  setIsShowMenu: (isShowMenu: boolean) => void
}

type MapStateToProps = {
  isShowMenu: boolean
}

type HeaderProps = RouteComponentProps & MapDispatchToProps & MapStateToProps

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props)
    if (this.props.location.pathname === '/en') {
      i18n.changeLanguage('en')
    }
  }

  handleMenuButton = () => {
    const { isShowMenu, setIsShowMenu } = this.props
    isShowMenu ? setIsShowMenu(false) : setIsShowMenu(true)
  }

  render() {
    const { isShowMenu } = this.props
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
                <Link to={i18n.language === 'ja' ? '/en' : '/'}>
                  <button className="item" onClick={() => this.forceUpdate()}>
                    <Translation>{t => t('headerButton')}</Translation>
                  </button>
                </Link>
              </span>
            </span>
          </div>
          <ul className={classNames('underMenu', { show: isShowMenu })}>
            <Link to="/news">
              <li className="item">News</li>
            </Link>
            <a href="https://www.drecom.co.jp/company/" target="_blank" rel="noopener noreferrer">
              <li className="item">Company</li>
            </a>
            <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
              <li className="item">Contact</li>
            </a>
            <Link to={i18n.language === 'ja' ? '/en' : '/'}>
              <li className="item">
                <Translation>{t => t('headerButton')}</Translation>
              </li>
            </Link>
          </ul>
        </div>
        <div className="padding-area" />
      </div>
    )
  }
}

const mapStateToProps: (state: ReduxState) => MapStateToProps = state => ({
  isShowMenu: state.header.isShowMenu,
})

const mapDispatchToProps: (dispatch: Dispatch<Action>) => MapDispatchToProps = dispatch => ({
  setIsShowMenu: isShowMenu => dispatch(setIsShowMenu(isShowMenu)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
