import * as React from 'react'
import Member from '../Member'
import naito from '../../img/naito.jpg'
import naitoAni from '../../img/naito-ani.gif'
import pay from '../../img/mega.jpg'
import payAni from '../../img/mega-ani.gif'
import neco from '../../img/fixNeco.png'
import necoAni from '../../img/neco-ani.gif'
import ogw from '../../img/police.png'
import ogwAni from '../../img/police-ani.gif'
import './Team.scss'
import tk from '../../img/tk.jpeg'
import tkAni from '../../img/tk-ani.png'
import blackmask from '../../img/blackmask.png'
import blackmaskAni from '../../img/blackmask-ani.gif'
import bluehair from '../../img/bluehair.jpg'
import bluehairAni from '../../img/bluehair-ani.gif'
import colorfulhat from '../../img/colorfulhat.png'
import colorfulhatAni from '../../img/colorfulhat-ani.gif'
import flyup from '../../img/flyup.jpg'
import flyupAni from '../../img/flyup-ani.gif'
import pinkicon from '../../img/pinkicon.png'
import pinkiconAni from '../../img/pinkicon-ani.gif'
import kmok from '../../img/kmok.png'
import kmokAni from '../../img/kmok_ani.gif'
import tym from '../../img/tym.jpeg'
import tymAni from '../../img/tym_ani.gif'
import { useTranslation } from 'react-i18next'
import Slide from '../Slide'

const Team = () => {
  const { t } = useTranslation()
  return (
    <Slide className="Team">
      <h2>Team</h2>
      <p>{t('teamMessage')}</p>
      <div className="member-area">
        <Member className="member-icon" imgFile={naito} movieFile={naitoAni} name="Producer" />
        <Member className="member-icon" imgFile={neco} movieFile={necoAni} name="Director" />
        <Member className="member-icon" imgFile={pay} movieFile={payAni} name="Planner" />
        <Member className="member-icon" imgFile={ogw} movieFile={ogwAni} name="Engineer" />
        <Member className="member-icon" imgFile={kmok} movieFile={kmokAni} name="Planner" />
        <Member className="member-icon" imgFile={blackmask} movieFile={blackmaskAni} name="Designer" />
        <Member className="member-icon" imgFile={tym} movieFile={tymAni} name="Engineer" />
        <Member className="member-icon" imgFile={tk} movieFile={tkAni} name="Engineer" />
        <Member className="member-icon" imgFile={flyup} movieFile={flyupAni} name="Planner" />
        <Member className="member-icon" imgFile={bluehair} movieFile={bluehairAni} name="Planner" />
        <Member className="member-icon" imgFile={pinkicon} movieFile={pinkiconAni} name="Designer" />
        <Member className="member-icon" imgFile={colorfulhat} movieFile={colorfulhatAni} name="Planner" />
      </div>
    </Slide>
  )
}

export default Team
