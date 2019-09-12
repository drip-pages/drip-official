import React, { useState } from 'react'
import './Member.scss'
import classNames from 'classnames'

type MemberProps = {
  imgFile: string
  movieFile: string
  name: string
  className?: string
}
const Member = (props: MemberProps) => {
  const [mouseOver, setMouseOver] = useState(false)

  return (
    <div className={classNames('Member', props.className)}>
      <img
        className="member-image"
        src={mouseOver ? props.movieFile : props.imgFile}
        alt="member"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      />
      <p>{props.name}</p>
    </div>
  )
}

export default Member
