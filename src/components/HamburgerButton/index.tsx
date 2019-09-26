import React from 'react'
import './HamburgerButton.scss'
import { ReactComponent as ThreeLine } from '../../img/threeLine.svg'
import { ReactComponent as Batsu } from '../../img/batsu.svg'

type HamburgerButtonProps = {
  onClick: () => void
  show: boolean
}

class HamburgerButton extends React.Component<HamburgerButtonProps, {}> {
  handleHamburgerButtonClick = () => {
    this.props.onClick()
  }

  render() {
    const { show } = this.props
    return (
      <span className="HamburgerButton" onClick={this.handleHamburgerButtonClick}>
        {show ? <Batsu /> : <ThreeLine />}
      </span>
    )
  }
}

export default HamburgerButton
