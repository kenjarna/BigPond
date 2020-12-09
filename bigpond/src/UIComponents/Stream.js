import React from 'react';

import "../styles/stream.css";

const Stream = (props) => {
    return (
  
        <tr className="streamer-row">
            <td>
                <a href={"https://twitch.tv/"+props.streamName}>{props.streamName}</a>
            </td>
            <td>{props.viewCount}</td>
            <td>{props.gameName}</td>
        </tr>

     );
}
 
export default Stream;