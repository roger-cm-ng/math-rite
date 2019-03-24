import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import styleable from 'react-styleable';
// import PropTypes from 'prop-types';
import css from './thumbnails.scss';

@styleable(css)
class Thumbnails extends Component {
  render() {
    return (
      <div className={css.thumbnails}>
        <h1>Thumbnails</h1>
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
)(Thumbnails);
