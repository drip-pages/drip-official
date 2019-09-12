import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

type scrollToTopProps = {
  location: Location
} & RouteComponentProps

class ScrollToTop extends React.Component<scrollToTopProps> {
  componentDidUpdate(prevProps: scrollToTopProps): void {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
