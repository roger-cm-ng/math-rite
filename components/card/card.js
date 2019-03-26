import React, { Component } from 'react';
import styleable from 'react-styleable';
import PropTypes from 'prop-types';
import Svg from 'react-svg-inline';
import css from './card.scss';
import One from './images/one.svg';
import Two from './images/two.svg';
import Three from './images/three.svg';
import Five from './images/five.svg';
import Eight from './images/eight.svg';
import Thirteen from './images/thirteen.svg';
import Twenty from './images/twenty.svg';
import Forty from './images/forty.svg';
import Hundred from './images/hundred.svg';
import Infinity from './images/infinity.svg';
import Dragon from './images/dragon.svg';
import Yak from './images/yak.svg';

@styleable(css)
class Card extends Component {
  static propTypes= {
    svg: PropTypes.string,
    className: PropTypes.string
  };

  constructor() {
    super();

    this.card = {
      one: One,
      two: Two,
      three: Three,
      five: Five,
      eight: Eight,
      thirteen: Thirteen,
      twenty: Twenty,
      forty: Forty,
      hundred: Hundred,
      infinity: Infinity,
      dragon: Dragon,
      yak: Yak
    };
  }

  render() {
    const { svg, className } = this.props;

    return (
      <div className={`${css.card} ${className || ''}`}>
        <Svg svg={this.card[svg]} />
      </div>
    );
  }
}

export default Card;
