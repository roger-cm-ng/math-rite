import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import css from './deck.scss';
import { authenticate } from './deck-actions';

@styleable(css)
class Deck extends Component {
  static propTypes = {
    authenticate: PropTypes.func
  };

  // componentDidMount() {
  //   this.props.authenticate(9876);
  // }

  passwordHandler = (evt) => {
    if (evt.target.value.length === 4) {
      this.props.authenticate(evt.target.value);
    }
  }

  render() {
    return (
      <div className={css.deck}>
        <input
          type="password"
          maxLength="4"
          onChange={this.passwordHandler}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    authenticate
  },
  dispatch
);

export default connect(null, mapDispatchToProps)(Deck);
