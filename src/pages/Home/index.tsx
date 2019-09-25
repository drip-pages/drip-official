import * as React from 'react'
import TopLogo from '../../components/TopLogo'
import Mission from '../../components/Mission'
import News from '../../components/News'
import OurInvention from '../../components/OurInvention'
import Team from '../../components/Team'
import ContactUs from '../../components/ContactUs'
import i18n from 'i18next'

type HomeProps = {
  items: any[]
  onInit: () => void
  languageJa: boolean
}

class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props)
    i18n.changeLanguage(this.props.languageJa ? 'ja' : 'en')
  }
  componentDidMount(): void {
    this.props.onInit()
  }

  componentDidUpdate(prevProps: HomeProps): void {
    if (this.props.languageJa !== prevProps.languageJa) {
      this.props.onInit()
      i18n.changeLanguage(this.props.languageJa ? 'ja' : 'en')
    }
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
