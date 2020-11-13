import * as React from 'react';
import RCTMesh from '../ReactRTC/RTCMesh';

import '../../styles/VideoWrapper.css';

type VideoWrapperType = {};

/*
 * Description of function
 * @param props 
 */
export default function VideoWrapper(props: VideoWrapperType) {
  console.log('var: ', process.env.REACT_APP_SOCKET_URL)
  return (
    <div className="video-wrapper">
      <RCTMesh URL={process.env.REACT_APP_SOCKET_URL}/>
    </div>);
};