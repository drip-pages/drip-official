import * as React from 'react'
import './NewsList.scss'

type NewsListProps = {
  items: any[]
}
const NewsList = (props: NewsListProps) => (
  <ul className="NewsList">
    {props.items.map((item, index) => (
      <li key={index}>
        {item.day}
        <strong>{item.title}</strong>
        <br />
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.message}
        </a>
      </li>
    ))}
  </ul>
)

export default NewsList
