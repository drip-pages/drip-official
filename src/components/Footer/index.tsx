import * as React from 'react'
import './Footer.scss'
import drecomLogo from '../../img/drecom.png'
import facebookIcon from '../../img/fb.png'
import twitterIcon from '../../img/tw.png'
import Slide from '../Slide'

const Footer = () => (
  <Slide className="Footer">
    <img className="drecom-logo" alt="drecom logo" src={drecomLogo} />
    <div className="sns-icons">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdrip.drecom.co.jp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="facebook icon" alt="facebook" src={facebookIcon} />
      </a>
      <a
        href="http://twitter.com/intent/tweet?url=http%3A%2F%2Fdrip.drecom.co.jp&amp;text=DRIP%20-%20Drecom%20Invention%20Project&amp;tw_p=tweetbutton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="twitter icon" alt="twitter" src={twitterIcon} />
      </a>
    </div>
    <p>Copyright 2019 Drecom Co., Ltd. All Rights Reserved.</p>
  </Slide>
)

export default Footer
