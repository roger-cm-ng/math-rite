import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import css from './thumb-cards.scss';
import Card from '../card/card';
import { chooseCard } from '../big-card/big-card-actions';

@styleable(css)
class ThumbCards extends Component {
  static propTypes= {
    thumbCardsReducer: PropTypes.array,
    chooseCard: PropTypes.func
  };

  componentWillUpdate() {}

  render() {
    const { thumbCardsReducer } = this.props;
    return (
      <div className={css.component}>
        {
          thumbCardsReducer.map((item, ind) => (
            <div key={ind} className={css.shell} onClick={() => this.props.chooseCard(item)}>
              <Card className={css.thumb} svg={item} />
            </div>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    thumbCardsReducer: state.thumbCardsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    chooseCard
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ThumbCards);
