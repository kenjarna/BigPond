import {React,Component} from 'react';

import StreamerDetails from '../LogicComponents/getStreamerDetails';
import Stream from './Stream';

class StreamDetailList extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            streamerDetails: [],
            streamObj : new StreamerDetails()
        }
        this.getStreamDetails(); 
    }

    async getStreamDetails(name){
        await this.state.streamObj.getStreamerDetails(name);
        const data = await this.state.streamObj;
        if ('streamerData' in data){
            this.setState({
                streamerDetails: data.streamerData.data
            });
        }
        
    }

    render() { 
        return (  
            <div className="App-header">
                {this.state.streamerDetails.map(stream => (
                    <Stream 
                        streamName={stream.user_name}
                        viewCount={stream.viewer_count}
                    />
                ))}

            </div>
        );
    }
}
 
export default StreamDetailList;