import * as React from 'react'
import NewsList from '../../components/NewsList'

type NewsProps = {
  items: any[]
  onInit: () => void
}

class News extends React.Component<NewsProps, {}> {
  componentDidMount(): void {
    this.props.onInit()
  }

  render() {
    return (
      <div className="News">
        <h2>News</h2>
        <div className="content">
          <NewsList items={this.props.items} />
        </div>
      </div>
    )
  }
}

export default News
