import * as React from 'react'
import TopLogo from '../../components/TopLogo'
import Mission from '../../components/Mission'
import News from '../../components/News'
import OurInvention from '../../components/OurInvention'
import Team from '../../components/Team'
import ContactUs from '../../components/ContactUs'
import { connect } from 'react-redux'
import { setIsShowMenu } from '../../actions/header'
import { Action, Dispatch } from 'redux'

type MapDispatchToProps = {
  setIsShowMenu: (isShowMenu: boolean) => void
}

class Home extends React.Component<MapDispatchToProps, {}> {
  componentDidMount(): void {
    this.props.setIsShowMenu(false)
  }

  render() {
    return (
      <div className="Home">
        <TopLogo />
        <Mission />
        <News />
        <OurInvention />
        <Team />
        <ContactUs />
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
)(Home)
