/* global window */
import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';

import PropTypes from 'prop-types';
import css from './about.scss';

window.socket = io();

@styleable(css)
class About extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      currentRoom: '',
      newRoom: ''
    };
    window.socket.on('connect', () => {
      // console.log('user connected', window.socket.id);
    });
    window.socket.on('room', (room) => {
      this.setState({
        currentRoom: room
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      newRoom: e.target.value
    });
  }

  handleClick = () => {
    const { newRoom, currentRoom } = this.state;
    const room = newRoom || currentRoom;
    window.socket.emit('join', room);
    this.setState({
      currentRoom: room
    });
    this.props.history.push('/whiteboard');
  }

  render() {
    return (
      <div className={css.about}>
        <div>
          Enter Room ID : &nbsp;
          <input
            className="inputText"
            type="text"
            placeholder="optional"
            value={this.state.newRoom}
            onChange={this.handleChange}
          />
          &nbsp; &nbsp;
          <button className="nav-btn btn-fab" type="submit" onClick={this.handleClick}>Go</button>
        </div>
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
