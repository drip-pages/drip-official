import * as React from 'react'
import headerLogo from '../../img/navi.png'
import './Header.scss'
import classNames from 'classnames'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import HurgerButton from '../HurgerButton'
import { Translation } from 'react-i18next'
import i18n from 'i18next'

type HeaderProps = {
  showMenu: boolean
  toogleShowAccordionMenu: () => void
} & RouteComponentProps

type HeaderState = {
  value: number
}
class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    value: 0,
  }

  constructor(props: HeaderProps) {
    super(props)
    if (this.props.location.pathname === '/en') {
      i18n.changeLanguage('en')
    }
  }

  handleMenuButton = () => {
    this.props.toogleShowAccordionMenu()
  }

  render() {
    const { showMenu } = this.props
    return (
      <div className="Header">
        <div className="fixed-area">
          <div className="header-area">
            <Link to="/">
              <img alt="DRECOM INVENTION PROJECT" src={headerLogo} className="header-logo" />
            </Link>
            <span className="menu-area">
              <span className="native-button">
                <HurgerButton onClick={this.handleMenuButton} show={showMenu} />
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
          <ul className={classNames('underMenu', { show: showMenu })}>
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

export default withRouter(Header)
