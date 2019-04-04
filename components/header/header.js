import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import css from './header.scss';

@styleable(css)
class Header extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  render() {
    const { history } = this.props;
    return (
      <div className={css.header}>
        <ul className={css.shell}>
          <li
            className={css.nav}
            role="presentation"
            onClick={() => { history.push('/about'); }}
          >
            MATH-RITE
          </li>
          <li
            className={css.nav}
            role="presentation"
            onClick={() => { history.push('/whiteboard'); }}
          >
            WHITEBOARD
          </li>
          <li>
            <h1>dev</h1>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (/* state  */) => ({});

const mapDispatchToProps = dispatch => bindActionCreators(
  {},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
