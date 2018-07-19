import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Anime from 'animejs'
import '../../styles/index.css'

export default class PageMenu extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const tl = Anime.timeline()
    tl.add({
      targets: this.menu,
      opacity: 0,
      duration: 0,
      scale: 0.8,
      translateX: '100%',
    }).add({
      targets: this.menu,
      opacity: [0.9],
      duration: 1000,
      elasticity: 0,
      translateX: '0%',
      easing: 'easeInExpo',
      delay: 400,
      scale: 1
    })
  }

  render() {
    const { name, index, handleOpenProject, length } = this.props
    return (
      <div ref={ref => {this.menu = ref}} className={css(styles.scrollInstructionContainer)}>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.scrollInstruction)}>{index.currentItem + 1}. / {length}</div>
        </div>
        <div className={css(styles.wrapper)}>
          <div onClick={handleOpenProject} className={css(styles.menuProjectTitle)}>{name}</div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  scrollInstructionContainer: {
    height: 'auto',
    width: '100%',
    display:'block',
    gridColumn: '7/11',
    gridRow: '5/6',
    alignSelf: 'end',
    fontFamily: ['Inconsolata', 'sans-serif'], 
    color: '#F2F2F2',
    fontSize: '0.5rem',
    // border: '1px solid white'
  },
  scrollInstruction: {
    width: 'auto',
    fontSize: '1rm',
    marginBottom: '20px'
  },
  menuProjectTitle: {
    // border: '1px solid green',
    fontSize: '3rem',
    fontFamily: ['Vollkorn', 'serif'],
    cursor: 'pointer'
  },
  wrapper: {
    overflow: 'hidden',
    // border: '1px solid red'
  }
})
