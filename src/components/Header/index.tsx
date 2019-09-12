import React from 'react'
import headerLogo from '../../img/navi.png'
import './Header.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import HurgerButton from '../HurgerButton'
import i18n from 'i18next'
import { Translation } from 'react-i18next'

type HeaderProps = {
  showMenu: boolean
  toogleShowAccordionMenu: () => void
}

type HeaderState = {
  value: number
}
class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    value: 0,
  }

  handleMenuButton = () => {
    this.props.toogleShowAccordionMenu()
  }

  hadleAccordionMenuTranslationButton = () => {
    this.props.toogleShowAccordionMenu()
    i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en')
  }

  handleTranslationButton = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en')
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
                <button className="item" onClick={this.handleTranslationButton}>
                  <Translation>{t => t('headerButton')}</Translation>
                </button>
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
            <li className="item" onClick={this.hadleAccordionMenuTranslationButton}>
              <Translation>{t => t('headerButton')}</Translation>
            </li>
          </ul>
        </div>
        <div className="padding-area" />
      </div>
    )
  }
}

export default Header
