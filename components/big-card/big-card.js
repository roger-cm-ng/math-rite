import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './big-card.scss';
import Card from '../card/card';

@styleable(css)
class BigCard extends Component {
  static propTypes= {
    bigCardReducer: PropTypes.string,
    history: PropTypes.object
  };

  backToThumbCards = () => {
    const { history } = this.props;
    history.push('/sc-thumb-cards');
  }

  render() {
    const { bigCardReducer } = this.props;

    return (
      <div className={css['big-card']}>
        <div onClick={this.backToThumbCards}>
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

export default connect(mapStateToProps, null)(BigCard);
