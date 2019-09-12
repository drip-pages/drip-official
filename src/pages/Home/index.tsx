import * as React from 'react'
import TopLogo from '../../components/TopLogo'
import Mission from '../../components/Mission'
import News from '../../components/News'
import OurInvention from '../../components/OurInvention'
import Team from '../../components/Team'
import ContactUs from '../../components/ContactUs'

type HomeProps = {
  items: any[]
  onInit: () => void
}

class Home extends React.Component<HomeProps, {}> {
  componentDidMount(): void {
    this.props.onInit()
  }

  render() {
    return (
      <div className="Home">
        <TopLogo />
        <Mission />
        <News items={this.props.items} />
        <OurInvention />
        <Team />
        <ContactUs />
      </div>
    )
  }
}

export default Home
