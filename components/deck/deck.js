import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import css from './deck.scss';

@styleable(css)
class Deck extends Component {
  render() {
    return (
      <div className={css.deck}>
        <h1>Deck</h1>
      </div>
    );
  }
}

export default connect(null, null)(Deck);
