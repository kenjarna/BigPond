import React from 'react';

const Stream = (props) => {
    return ( 
        <div>
            <p>
                {props.streamName}
            </p>
            <p>
                {props.viewCount}
            </p>
        </div>
     );
}
 
export default Stream;