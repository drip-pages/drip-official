import * as React from 'react'
import { Helmet } from 'react-helmet'
import naitoAni from '../../img/naito-ani.gif'
import masterAni from '../../img/master-ani.gif'
import payAni from '../../img/mega-ani.gif'
import necoAni from '../../img/neco-ani.gif'
import ogwAni from '../../img/police-ani.gif'
import pieerAni from '../../img/pieer-ani.png'
import tkAni from '../../img/tk-ani.png'
import ownerAni from '../../img/owner-ani.png'

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
      { rel: 'preload', href: masterAni, as: 'image' },
      { rel: 'preload', href: payAni, as: 'image' },
      { rel: 'preload', href: necoAni, as: 'image' },
      { rel: 'preload', href: ogwAni, as: 'image' },
      { rel: 'preload', href: pieerAni, as: 'image' },
      { rel: 'preload', href: tkAni, as: 'image' },
      { rel: 'preload', href: ownerAni, as: 'image' },
    ]}
  />
)

export default HelmetWrap
