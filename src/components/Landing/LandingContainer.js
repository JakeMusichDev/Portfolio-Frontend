import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import "../../styles/index.css"
import { withScrollMonitor } from '../../hoc/ScrollHOC'

import { items } from '../../data/home-route-data.js'

import LandingText from './LandingText'
import LandingMenu from './LandingMenu'
import LandingImage from './LandingImage'
import LandingCounter from './LandingCounter'

class LandingContainer extends Component {

  render() {
    const { data } = this.props
    const currentProject = this.nextProject()
    return(
      <div className={css(styles.landingContainerMain)} >
        <LandingMenu scrollState={data} open={this.openPage} />
        <LandingImage src={currentProject.src} />
        <LandingCounter index={data.currentItem} />
        <LandingText text={' - Artist'} mainStyle={textStyles.artist} />
        <LandingText text={' - Developer'} mainStyle={textStyles.dev} />
        <LandingText text={'Jake Musich'} mainStyle={textStyles.name} />
      </div>
    )
  }

  nextProject = () => {
    const { data} = this.props
    // add css classes to change text opacity
    return items[data.currentItem]
  }

  openPage = (e, item) => {
    console.log(e, item);
    this.props.history.push(`${item.route}`)
  }
}

const styles = StyleSheet.create({
  landingContainerMain: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    background: 'rgb(15,15,15)',
    gridTemplateColumns: 'repeat(10, 10%)',
    gridTemplateRows: 'repeat(5, 20%)',
    color: 'white',
    fontSize: 10,
    fontFamily: 'Inconsolata'
  }
})

const textStyles = StyleSheet.create({
  artist: {
    gridRow: '1/2',
    gridColumn: '3/4',
  },
  dev: {
    gridRow: '1/2',
    gridColumn: '5/6',
  },
  name: {
    gridRow: '2/3',
    gridColumn: '10/11',
    webkitWritingMode: 'vertical-rl',
    writingMode: 'vertical-rl',
    fontSize: 12,
    // fontFamily: 'Vollkorn',
    opacity: 0.7
  },
})

const LandingWithScroll = withScrollMonitor(LandingContainer, items)
export default LandingWithScroll