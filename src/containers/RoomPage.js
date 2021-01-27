import React, { Component } from 'react';
import MediaContainer from './MediaContainer'
import CommunicationContainer from './CommunicationContainer'
import { connect } from 'react-redux'
import store from '../store'
import io from 'socket.io-client'

function RoomPage () {
  // constructor(props) {
  //   super(props);
  //   this.getUserMedia = navigator.mediaDevices.getUserMedia({
  //     audio: true,
  //     video: true
  //   }).catch(e => alert('getUserMedia() error: ' + e.name))
  //   this.socket = io.connect();
  // }
  const getUserMedia = navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
  })
    .catch(e => alert('getUserMedia() error: ' + e.name))
    const socket = io.connect();
  // componentDidMount() {
  //   this.props.addRoom();
  // }
  React.useEffect(() => {
    const mounted = true;
    if (mounted) {
      props.addRoom()
    }
    return () => { mounted = false;}
 },[])
    return (
      <div>
        <MediaContainer media={media => media = media} socket={socket} getUserMedia={getUserMedia} />
        <CommunicationContainer socket={socket} media={media} getUserMedia={getUserMedia} />
      </div>
    );
  
}
const mapStateToProps = store => ({rooms: new Set([...store.rooms])});
const mapDispatchToProps = (dispatch, ownProps) => (
    {
      addRoom: () => store.dispatch({ type: 'ADD_ROOM', room: ownProps.match.params.room })
    }
  );
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
