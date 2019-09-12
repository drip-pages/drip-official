import React from 'react'
import './HurgerButton.scss'
import { ReactComponent as ThreeLine } from '../../img/threeLine.svg'
import { ReactComponent as Batsu } from '../../img/batsu.svg'

type HurgerButtonProps = {
  onClick: () => void
  show: boolean
}

class HurgerButton extends React.Component<HurgerButtonProps, {}> {
  handleHurgerButtonClick = () => {
    this.props.onClick()
  }

  render() {
    const { show } = this.props
    return (
      <span className="HurgerButton" onClick={this.handleHurgerButtonClick}>
        {show ? <Batsu /> : <ThreeLine />}
      </span>
    )
  }
}

export default HurgerButton
