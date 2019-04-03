import React, { Component } from 'react';
import styleable from 'react-styleable';
import css from './deck.scss';

@styleable(css)
class Deck extends Component {
  render() {
    return (
      <div className={css.deck}>
        <h1>Coming soon</h1>
      </div>
    );
  }
}

export default Deck;
