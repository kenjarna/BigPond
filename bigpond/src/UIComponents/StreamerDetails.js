import {React,Component} from 'react';

import StreamerDetails from '../LogicComponents/getStreamerDetails';
import Stream from './Stream';
import "../styles/grid.css"

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

    buildRowData= () => {
        return this.state.streamerDetails.map(stream => {
                return (
                    <Stream 
                        streamName={stream.user_name}
                        viewCount={stream.viewer_count}
                        gameName={stream.game_name}
                        picURL={stream.thumbnail_url}
                    />
                )
            
            })
    }

    render() { 
        return (  
            <div className="App-header">
                <table className="streamer-grid" id="streamer-grid">
                    <tr className="streamer-details">
                        <th>Streamer</th>
                        <th>Last View Count</th>
                        <th>Last Game Played</th>
                    </tr>
                    {this.buildRowData()}

                </table>
            </div>
        );
    }
}
 
export default StreamDetailList;