import * as React from 'react'
import { Helmet } from 'react-helmet'

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
      }, // NOTE: 本家から引っ張っていることに留意するように
      { property: 'og:title', content: 'DRIP - Drecom Invention Project' },
      { property: 'og:site_name', content: 'DRIP' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: description },
      { property: 'og:url', content: 'http://drip.drecom.co.jp' }, // NOTE: 本家URLであることに留意するように
      { name: 'twitter:card', content: 'summary' },
    ]}
  />
)

export default HelmetWrap
