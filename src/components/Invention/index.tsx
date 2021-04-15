import * as React from 'react'
import { ReactNode } from 'react'
import './Invention.scss'
import classNames from 'classnames'
import Slide from '../Slide'

type InventionProps = {
  bigLogo: string
  smallLogo?: string
  className?: string
  isCenteringContent?: boolean
  children?: ReactNode | null
}

class Invention extends React.Component<InventionProps> {
  render() {
    const { bigLogo, smallLogo, className, isCenteringContent, children } = this.props
    return (
      <Slide className={classNames('Invention', className)}>
        {smallLogo && <img className="mobile-show-logo" src={smallLogo} alt="smallLogo" />}
        <img className="bigLogo" src={bigLogo} alt="bigLogo" />
        <div className={classNames("content-area", isCenteringContent && "centering")}>
          {smallLogo && <img className="smallLogo" src={smallLogo} alt="smallLogo" />}
          {children}
        </div>
      </Slide>
    )
  }
}

export default Invention
