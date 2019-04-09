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
      room: '',
      newRoom: '',
      message: ''
    };
    window.socket.on('connect', () => {
      console.log('user connected', window.socket.id);
    });
    window.socket.on('room', (room) => {
      this.setState({
        room
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
      newRoom: e.target.value
    });
  }

  handleClick = () => {
    const { newRoom } = this.state;
    window.socket.emit('join', newRoom);
    this.setState({
      room: newRoom
    });
  }

  render() {
    // const { history } = this.props;
    return (
      <div className={css.about}>
        <div>
          <span>Your ID: </span>
          <span>{this.state.room}</span>
        </div>
        <div>
          <input
            type="text"
            value={this.state.newRoom}
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
