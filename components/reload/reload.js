import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import css from './reload.scss';

@styleable(css)
class Reload extends Component {
  // static propTypes= {};

  componentWillUpdate() {}

  render() {
    return (
      <div className={css.reload}>
        <h1>Reload</h1>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     bigCardReducer: state.bigCardReducer
//   };
// }

export default connect(null, null)(Reload);
