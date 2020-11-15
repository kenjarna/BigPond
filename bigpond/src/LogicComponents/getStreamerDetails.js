import axios from 'axios';
import {getStreamerBase} from '../config.js';

export default class StreamerDetails {
    constructor(first=20){
        this.first = first;
    }

    buildLink(streamerName){
        return getStreamerBase + "?query=" + streamerName;
    }

    getAuthToken() {

    }


    async fetchStreamerInfo(){
        const link = this.buildLink();
        const authToken = this.getAuthToken();

    }


}