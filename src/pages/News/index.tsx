import * as React from 'react'
import NewsList from '../../components/NewsList'
import { Action, Dispatch } from 'redux'
import { setIsShowMenu } from '../../actions/header'
import { connect } from 'react-redux'
import NewsItems from '../../data/newsItems.json'

type MapDispatchToProps = {
  setIsShowMenu: (isShowMenu: boolean) => void
}

class News extends React.Component<MapDispatchToProps> {
  componentDidMount(): void {
    this.props.setIsShowMenu(false)
  }

  render() {
    return (
      <div className="News">
        <h2>News</h2>
        <div className="content">
          <NewsList items={NewsItems} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps: (dispatch: Dispatch<Action>) => MapDispatchToProps = dispatch => ({
  setIsShowMenu: isShowMenu => dispatch(setIsShowMenu(isShowMenu)),
})

export default connect(
  null,
  mapDispatchToProps
)(News)
