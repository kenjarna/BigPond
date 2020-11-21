import React from 'react';

import "../styles/stream.css";

const Stream = (props) => {
    return (
        <div>
            <table className="streamer-details">
                <tr className="detail-header">
                    <th>Name</th>
                    <th>View Count</th>
                    <th>Last Played</th>
                </tr>

                <tr>
                    <td>
                        <a href={"https://twitch.tv/"+props.streamName}>{props.streamName}</a>
                    </td>
                    <td>
                        {props.viewCount}
                    </td>
                    <td>
                        {props.gameName}
                    </td>
                </tr>
                
            </table>
            
        </div>
     );
}
 
export default Stream;