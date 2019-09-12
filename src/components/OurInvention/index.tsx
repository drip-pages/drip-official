import * as React from 'react'
import Invention from '../Invention'
import arowBigLogo from '../../img/arow.png'
import arowSmallLogo from '../../img/ArowLogo.png'
import pillarsBigLogo from '../../img/6-pillars.png'
import pillarsSmallLogo from '../../img/pillarsSmall.png'
import loveChainBigLogo from '../../img/lovechain.png'
import loveCahinSmallLogo from '../../img/loveChainSmallLogo.png'
import './OurInvention.scss'
import { useTranslation } from 'react-i18next'
import Slide from '../Slide'

const OurInvention = () => {
  const { t } = useTranslation()
  return (
    <div className="OurInvention">
      <Slide className="our-invention-title-area">
        <h2>Our invention</h2>
      </Slide>
      <Invention className="arow" bigLogo={arowBigLogo} smallLogo={arowSmallLogo}>
        <p>{t('inventionArow_1')}</p>
        <a href="https://arow.world/" target="_blank" rel="noopener noreferrer">
          https://arow.world/
        </a>
      </Invention>
      <Invention className="pillars" bigLogo={pillarsBigLogo} smallLogo={pillarsSmallLogo}>
        <p>{t('inventionPillars_1')}</p>
        <a href="https://6-pillars.ooo/" target="_blank" rel="noopener noreferrer">
          https://6-pillars.ooo/
        </a>
      </Invention>
      <Invention className="loveChain" bigLogo={loveChainBigLogo} smallLogo={loveCahinSmallLogo}>
        <strong>{t('inventionLove_1')}</strong>
        <p>{t('inventionLove_2')}</p>
        <a href="https://lovechain.ooo/" target="_blank" rel="noopener noreferrer">
          https://lovechain.ooo/
        </a>
      </Invention>
    </div>
  )
}

export default OurInvention
