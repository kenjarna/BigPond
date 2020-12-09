import {React,Component} from 'react';

import StreamerDetails from '../LogicComponents/getStreamerDetails';
import Stream from './Stream';
import Pagination from './Pagination';
import "../styles/grid.css"

class StreamDetailList extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            streamerDetails: [],
            streamObj : new StreamerDetails(),
            nextKey: "",
            pageNumbers: [],
            currentPage: 0
        }
        this.getStreamDetails(); 
    }

    async getStreamDetails(name){
        await this.state.streamObj.getStreamerDetails(name);
        const data = await this.state.streamObj;
        if ('streamerData' in data){
            this.setState({
                streamerDetails: data.streamerData.data,
                nextKey: data.streamerData.pagination.cursor
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

    updatePageNumbers = () => {
        let lastPage = this.state.pageNumbers[-1];
        const newLastPageValue = lastPage++;
        this.setState({
            pageNumbers: this.state.pageNumbers.append(newLastPageValue)
        });
    }

    setPageNumber = (pageNumber) => {
        this.setState({ currentPage: pageNumber  });
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
                <Pagination 
                    nextKey={this.state.nextKey}
                    addPageNumber={this.updatePageNumbers}
                    currentPage={this.state.currentPage}
                    setPage={this.setPageNumber}
                />
            </div>
        );
    }
}
 
export default StreamDetailList;