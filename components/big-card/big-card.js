import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import css from './big-card.scss';
import { chooseCard } from './big-card-actions';
import Card from '../card/card';

@styleable(css)
class BigCard extends Component {
  static propTypes= {
    chooseCard: PropTypes.func,
    bigCardReducer: PropTypes.string
  };

  componentWillUpdate() {}

  render() {
    const { bigCardReducer } = this.props;

    return (
      <div className={css.component}>
        <div className={css.shell} onClick={() => this.props.chooseCard(null)}>
          <Card className={css.card} svg={bigCardReducer} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bigCardReducer: state.bigCardReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    chooseCard
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BigCard);
