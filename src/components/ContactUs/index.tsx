import * as React from 'react'
import './ContactUs.scss'
import { useTranslation } from 'react-i18next'
import Slide from '../Slide'

const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <Slide className="ContactUs">
      <h2>Contact us!</h2>
      <div className="contents">
        <div className="label">Media</div>
        <span className="message">
          {t('contactMediaMessage')}
          <br />
        </span>
        <div className="label">Partner</div>
        <span className="message">
          {t('contactPartnerMessage')}
          <br />
        </span>
        <div className="label">Recruit</div>
        <span className="message">
          {t('contactRecruitMessage')}
          <br />
        </span>
        <br />
      </div>
      <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
        <button className="contact-button">{t('contactButton')}</button>
      </a>
    </Slide>
  )
}

export default ContactUs
