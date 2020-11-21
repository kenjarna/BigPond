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

    buildRowData= (set) => {
        return <tr>
            {this.state.streamerDetails.slice(set,set+5).map(stream => {
                return (
                    <td>
                        <Stream 
                            streamName={stream.user_name}
                            viewCount={stream.viewer_count}
                            gameName={stream.game_name}
                            picURL={stream.thumbnail_url}
                        />
                    </td>
                )
            
            })}
        </tr>
    }

    render() { 
        return (  
            <div className="App-header">
                <table className="streamer-grid" id="streamer-grid">
                  {this.buildRowData(0)}
                  {this.buildRowData(5)}
                  {this.buildRowData(10)}
                  {this.buildRowData(15)}
                  {this.buildRowData(20)}
                  {this.buildRowData(25)}
                  {this.buildRowData(30)}
                  {this.buildRowData(35)}
                  {this.buildRowData(40)}
                  {this.buildRowData(45)}
                  {this.buildRowData(50)}

                </table>
            </div>
        );
    }
}
 
export default StreamDetailList;