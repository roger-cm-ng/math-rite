import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/core.scss';
import css from './reload.scss';
import reloadActions from './reload-actions.js';

@styleable(css)
class Reload extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    reloadActions: React.PropTypes.func,
    reloadReducer: React.PropTypes.object
	};

  componentWillUpdate() {}

  render() {
    return (
      <div className={`hwrld ${this.props.css.hwrld}`} >
        <h1>Reload 2</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    reloadReducer: state.reloadReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    reloadActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reload);
