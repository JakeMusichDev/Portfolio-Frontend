import React, { Component, ImageBackground } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { flex } from '../../styles/styleUtils'
import Anime from 'animejs'
import "./../../styles/index.css"
import line from '../../assets/general/scroll.svg'
import {mobileDetection} from '../../utils/mobileDetect'

export default class ScrollIndictator extends Component {
  componentWillMount() {
    this.isMobile = mobileDetection()
  }

  componentDidMount() {
    Anime({
      targets: this.indicator,
      opacity: [0,1],
      duration: 1000,
    })
  }


  render() {
    const {gridPos} = this.props
    const instrText =  this.isMobile ? "SWIPE" : "SCROLL or CLICK"
    return (
      <div className={css(styles.scrollIndicatorContainer, gridPos, flex.flexCenter)}>
        <div className={css(styles.text)} ref={refDiv => {this.indicator = refDiv}}>{instrText}</div>
      </div>
    )
  }
  
}

const styles = StyleSheet.create({
  scrollIndicatorContainer: {
    height: '100%',
    width: '100%',
  },
  text: {
    // width: '40px',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: '5%'
  }
})