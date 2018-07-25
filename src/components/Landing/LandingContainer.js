import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import "../../styles/index.css"
import { withScrollMonitor } from '../../utils/hoc/ScrollHOC'
import { breakPoints } from '../../utils/styles'
import { items } from '../../data/routeData.js'

import LandingText from './LandingText'
import LandingMenu from './LandingMenu'
import LandingImage from './LandingImage'
import LandingCounter from './LandingCounter'
import ScrollIndicator from '../General/ScollIndicator'

class LandingContainer extends Component {
  componentDidMount() {
    Anime.timeline().add({
      targets: [this.container.childNodes],
      translateX: '10%',
      duration: 0,
      opacity: 0
    }).add({
      targets: this.container.childNodes,
      translateX: '0%',
      duration: 1000,
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: (e, i) => i * 100,
    })
  }
  
  render() {
    const { data } = this.props
    const currentProject = this.nextProject()
    return(
      <div ref={refDiv => {this.container = refDiv}} className={css(styles.landingContainerMain)} >
        <LandingMenu scrollState={data} open={this.openPage} />
        <LandingImage src={currentProject.src} />
        {/* <ScrollIndicator gridPos={styles.gridPos} /> */}
        <LandingCounter index={data.currentItem} />
        <LandingText text={' - Artist'} mainStyle={textStyles.artist} />
        <LandingText text={' - Developer'} mainStyle={textStyles.dev} />
        <LandingText text={' - Jake Musich'} mainStyle={textStyles.name} />
        <LandingText text={'[ Portfolio ]'} mainStyle={textStyles.portfolio} />
      </div>
    )
  }

  nextProject = () => {
    const { data } = this.props
    return items[data.currentItem]
  }

  openPage = (e, item) => {
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
  },
  gridPos: {
    gridRow: '5',
    gridColumn: '5/6',
    [breakPoints.mobile]: {
      gridColumn: '4/6',
    }
  }
})

const textStyles = StyleSheet.create({
  artist: {
    gridRow: '1/2',
    gridColumn: '4/5',
    whiteSpace: 'nowrap'

  },
  dev: {
    gridRow: '1/2',
    whiteSpace: 'nowrap',
    gridColumn: '7/8',
  },
  name: {
    gridRow: '2/3',
    gridColumn: '10/11',
    webkitWritingMode: 'vertical-rl',
    writingMode: 'vertical-rl',
    fontSize: 14,
    whiteSpace: 'nowrap',
    opacity: 0.9,
  },
  portfolio: {
    gridRow: '5/6',
    whiteSpace: 'nowrap',
    gridColumn: '1/3',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    opacity: 0.7,
    transition: '0.3s grid-column',
    [breakPoints.mobile]: {
      gridColumn: '2/3',
    },
    [breakPoints.mobile]: {
      gridColumn: '2/3',
    }
  }
})

const LandingWithScroll = withScrollMonitor(LandingContainer, items)
export default LandingWithScroll