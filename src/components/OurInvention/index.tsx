import * as React from 'react'
import Invention from '../Invention'
import roootSmallLogo from '../../img/rooot.png'
import arowBigLogo from '../../img/arow.png'
import arowSmallLogo from '../../img/ArowLogo.png'
import pillarsBigLogo from '../../img/6-pillars.png'
import pillarsSmallLogo from '../../img/pillarsSmall.png'
import './OurInvention.scss'
import { useTranslation } from 'react-i18next'
import Slide from '../Slide'

// NOTE: bigLogo に表示するものは無いが、minWidth 以上のウィンドウで幅操作した時に Invention エリアの高さを可変させたい用に、透明な画像を使っています
const roootBigLogo = "data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7"

const OurInvention = () => {
  const { t } = useTranslation()
  return (
    <div className="OurInvention">
      <Slide className="our-invention-title-area">
        <h2>Our invention</h2>
      </Slide>
      <Invention className="rooot" bigLogo={roootBigLogo} smallLogo={roootSmallLogo}>
        <p>{t('inventionRooot_1')}</p>
        <a href="https://www.rooot.biz/" target="_blank" rel="noopener noreferrer">
          https://www.rooot.biz/
        </a>
      </Invention>
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
    </div>
  )
}

export default OurInvention
