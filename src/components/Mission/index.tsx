import * as React from 'react'
import './Mission.scss'
import { useTranslation } from 'react-i18next'
import Slide from '../Slide'
import { useSelector } from 'react-redux'
import { ReduxState } from '../../reducers'
const languageSelector = (state: ReduxState) => state.translator.language

const Mission = () => {
  const languageState = useSelector(languageSelector)
  const { t } = useTranslation()
  return (
    <Slide className="Mission">
      <h2>The goal of this project</h2>
      <div className="content">
        <p>{t('missionContent_1')}</p>
        <br />
        <p>{t('missionContent_2')}</p>
        {languageState === 'en' && <br />}
        <p>{t('missionContent_3')}</p>
        <br />
        <p>{t('missionContent_4')}</p>
        <p>{t('missionContent_5')}</p>
        <br />
        <p>{t('missionContent_6')}</p>
      </div>
    </Slide>
  )
}

export default Mission
