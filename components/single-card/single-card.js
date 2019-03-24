import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import styleable from 'react-styleable';
// import PropTypes from 'prop-types';
import css from './single-card.scss';

@styleable(css)
class SingleCard extends Component {
  render() {
    return (
      <div className={css['single-card']}>
        <h1>SingleCard</h1>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {},
//     dispatch
//   );
// };

export default connect(
  null, // mapStateToProps,
  null // mapDispatchToProps
)(SingleCard);
