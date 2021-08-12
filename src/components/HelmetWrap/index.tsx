import * as React from 'react'
import { Helmet } from 'react-helmet'
import naitoAni from '../../img/naito-ani.gif'
import payAni from '../../img/mega-ani.gif'
import necoAni from '../../img/neco-ani.gif'
import ogwAni from '../../img/police-ani.gif'
import tkAni from '../../img/tk-ani.png'
import kmokAni from '../../img/kmok_ani.gif'
import tymAni from '../../img/tym_ani.gif'
import blackmaskAni from '../../img/blackmask-ani.gif'
import bluehairAni from '../../img/bluehair-ani.gif'
import colorfulhatAni from '../../img/colorfulhat-ani.gif'
import flyupAni from '../../img/flyup-ani.gif'
import pinkiconAni from '../../img/pinkicon-ani.gif'

// NOTE: metaタグのdescriptionに書く内容
const description =
  'DRIP - Drecom Invention Projectは、(株)ドリコムの「発明を産み続ける」という挑戦に取り組む活動です。'

const HelmetWrap = () => (
  <Helmet
    title={'DRIP - Drecom Invention Project'}
    meta={[
      { name: 'twitter:card', content: 'summary' },
      { name: 'description', content: description },
      {
        property: 'og:image',
        content: 'https://drip.drecom.co.jp/img/logo.png',
      },
      { property: 'og:title', content: 'DRIP - Drecom Invention Project' },
      { property: 'og:site_name', content: 'DRIP' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: description },
      { property: 'og:url', content: 'http://drip.drecom.co.jp' }, // NOTE: 本家URLであることに留意するように
      { name: 'twitter:card', content: 'summary' },
    ]}
    link={[
      { rel: 'preload', href: naitoAni, as: 'image' },
      { rel: 'preload', href: payAni, as: 'image' },
      { rel: 'preload', href: necoAni, as: 'image' },
      { rel: 'preload', href: ogwAni, as: 'image' },
      { rel: 'preload', href: tkAni, as: 'image' },
      { rel: 'preload', href: kmokAni, as: 'image' },
      { rel: 'preload', href: tymAni, as: 'image' },
      { rel: 'preload', href: blackmaskAni, as: 'image' },
      { rel: 'preload', href: bluehairAni, as: 'image' },
      { rel: 'preload', href: colorfulhatAni, as: 'image' },
      { rel: 'preload', href: flyupAni, as: 'image' },
      { rel: 'preload', href: pinkiconAni, as: 'image' },
    ]}
  />
)

export default HelmetWrap
