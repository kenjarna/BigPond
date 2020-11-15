import axios from 'axios';

const twitchAuthAPI = 'https://id.twitch.tv/oauth2/token';
const streamerDetailsAPI = 'https://api.twitch.tv/helix/search/channels';
const streamsAPI = 'https://api.twitch.tv/helix/streams';

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const grant_type = process.env.REACT_APP_GRANT_TYPE;

export default class StreamerDetails {
    constructor(first=20){
        
        this.first = first;
        this.authToken = undefined;
        this.streamerData = undefined;
    }

    async getStreamerDetails(streamerName=""){
        await this.getAuthorizationToken();
        if(streamerName.match("$^") || streamerName === undefined){
            await this.getRandomStreamDetails(this.getAuthToken());
        } else{
            await this.getSpecificStream(streamerName,this.getAuthToken());
        }
    }

    async getRandomStreamDetails(authToken) {
        const Authorization = "Bearer " + authToken;
        await axios.get(streamsAPI, { 
            params:{
                'first': 100
            },
            headers:{
                'client-id':client_id,
                Authorization
            }
        })
        .then(response => this.setStreamerData(response.data));
    }

    async getSpecificStream(streamerName,authToken){
        this.getAuthorizationToken();
        const Authorization = "Bearer " + authToken;

        await axios.get(streamerDetailsAPI+"?query="+streamerName, { 

            headers: {
                'client-id': client_id,
                Authorization
            }})
        .then(response => this.setStreamerData(response.data));
    }

    async getAuthorizationToken() {
        
        await axios.post(twitchAuthAPI ,null, { params: {
            client_id,
            client_secret,
            grant_type
        }})
        .then(response => this.setAuthToken(response.data.access_token));
    }

    setAuthToken(token){
        this.authToken = token;
    }

    getAuthToken() {
        return this.authToken;
    }

    setStreamerData(data){
        this.streamerData = data;
    
    }

    getStreamerData(){

        return this.streamerData;
    }

}