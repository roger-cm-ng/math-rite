/* global window */
import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';

// import PropTypes from 'prop-types';
import css from './about.scss';

window.socket = io();

@styleable(css)
class About extends Component {
  // static propTypes = {
  //   history: PropTypes.object
  // };
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      url: '',
      message: ''
    };
    window.socket.on('connect', () => {
      console.log('user connected', window.socket.id);
      this.setState({
        id: window.socket.id
      });
    });
    window.socket.on('data', (data) => {
      this.setState({
        message: `data received from ${data.data}`
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      url: e.target.value
    });
  }

  handleClick = () => {
    console.log(this.state.url);
    window.socket.emit('data', { data: this.state.id });
  }

  render() {
    // const { history } = this.props;
    return (
      <div className={css.about}>
        <span>
          Your ID:
          {this.state.id}
        </span>
        <div>
          <input
            name="url"
            type="text"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleClick}>Go</button>
        </div>
        <span>
          {this.state.message}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (/* state  */) => ({});

const mapDispatchToProps = dispatch => bindActionCreators(
  {},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(About);
