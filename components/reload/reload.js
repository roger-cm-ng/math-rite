import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './reload.scss';
import BigCard from '../big-card/big-card';
import ThumbCards from '../thumb-cards/thumb-cards';

@styleable(css)
class Reload extends Component {
  static propTypes= {
		bigCardReducer: PropTypes.string
	};

  componentWillUpdate() {}

  render() {
		const { bigCardReducer } = this.props;

    return (
      <div className={css.hwrld} >
        {
					bigCardReducer ? (
						<BigCard />
					) : (
						<ThumbCards />
					)
				}
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    bigCardReducer: state.bigCardReducer
	};
}

export default connect(mapStateToProps, null)(Reload);
