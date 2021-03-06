import * as React from 'react'
import { Link } from 'react-router-dom'
import './News.scss'
import NewsList from '../NewsList'
import Slide from '../Slide'
import NewsItems from '../../data/newsItems.json'
const News = () => (
  <Slide className="News">
    <h2>News</h2>
    <div className="content">
      <NewsList items={NewsItems.slice(0, 3)} />
    </div>
    <Link className="read-more" to="/news">
      Read More...
    </Link>
  </Slide>
)

export default News
