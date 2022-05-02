import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Header, Bubble, Divider, Drawer, DrawerNav, Button, Avatar, Reply, Asset, Assets } from '../components';
import { Tooltip } from 'react-tippy';

// Utils
import * as axios from 'axios';
import Websocket from 'react-websocket';
import firebase from 'firebase';
import moment from 'moment';

// Apollo
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

        this.handleData = this.handleData.bind(this);
    }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDGxvtmPT6cXyck1LVHy6riTFyjDy_Od9Q',
            authDomain: 'chow-40e12.firebaseapp.com',
            databaseURL: 'https://chow-40e12.firebaseio.com/',
            storageBucket: 'gs://chow-40e12.appspot.com',
        });

        const client = new ApolloClient({
            // By default, this client will send queries to the
            //  `/graphql` endpoint on the same host
            // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
            // to a different host
            link: new HttpLink(),
            cache: new InMemoryCache(),
        });

        axios.get('/user?ID=12345')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('User logged in', user);
            } else {
                console.log('User not logged in');
            }
        });
    }

    handleData(data) {
        let result = JSON.parse(data);

        console.log('WS results', result);
    }

    render() {
        const { ui } = this.props.common;

        return(
            <div style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' }}>

                <Websocket url='ws://localhost:8888/live/product/12345/' onMessage={this.handleData}/>

                <div style={{ position: 'relative', overflow: 'hidden', flex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' }}>

                    <Header text="UNSILO.me" label="Yreeka"/>

                    <div style={{ zIndex: 1, background: ui.main.background, flex: 1, position: 'relative', overflow: 'scroll' }}>
                        <div style={{ paddingTop: 30 }}>

                            <Bubble user="Jo" src="https://media.istockphoto.com/photos/man-with-beard-picture-id625978254" date="3h ago" text="Hey guys, just a note on how I see projects moving forward! So I think we need to use an Agile approach as far as possible. It will probably enable us to handle stuff a bit better with client requests coming through..."/>
                            <Bubble user="Ben" src="https://media.istockphoto.com/photos/young-woman-on-the-phone-picture-id637815476" date="2h ago" text="I agree, we should definitely be doing this!" />

                            <Divider text="Yesterday" />

                            <Bubble user="Warren" src="https://media.istockphoto.com/photos/working-picture-id641859288" date="Yesterday" text="Don't need chat rooms? Want it to look like facebook chat? No problem. Nearly everything in our jQuery chat plugin can be customized with a click of the mouse." />
                            <Bubble user="Jo (hatch)" src="https://digitalagencynetwork.com/wp-content/uploads/2015/03/crafted-digital-creative-studio-new-york-nyc.png" date="Yesterday" text="This is very cool!" me={true}/>
                            <Bubble user="Warren (hatch)" src="https://digitalagencynetwork.com/wp-content/uploads/2015/03/crafted-digital-creative-studio-new-york-nyc.png" date="Yesterday" text="It's fun to chat with friends while watching a live-event video stream. I really like sites like Twitch.tv and thought it'd be cool to build a video chat app with a shared screen." />
                            <Bubble user="Ben" src="https://media.istockphoto.com/photos/woman-smiling-in-office-meeting-picture-id637901916" date="Yesterday" text="This is very cool!" />
                            <Bubble user="Jo" src="https://media.istockphoto.com/photos/man-with-beard-picture-id625978254" date="1d ago" text="Tutorial: Build a Twitch-like Video Chat App in 10 Minutes" />
                            <Bubble user="Julia" src="https://media.istockphoto.com/photos/man-casual-lifestyle-calm-solitude-concept-picture-id625388514" date="2d ago" text="Hey guys, just a note on how I see projects moving forward! So I think we need to use an Agile approach as far as possible. It will probably enable us to handle stuff a bit better with client requests coming through..." />
                            <Bubble user="Ben" src="https://media.istockphoto.com/photos/beautiful-woman-posing-against-dark-background-picture-id638756792" date="Yesterday" text="Yup, this is finally happening guys!" />

                            <Divider text="Today" />

                            <Bubble user="Warren (hatch)" src="https://digitalagencynetwork.com/wp-content/uploads/2015/03/crafted-digital-creative-studio-new-york-nyc.png" date="Yesterday" text="It's fun to chat with friends while watching a live-event video stream. I really like sites like Twitch.tv and thought it'd be cool to build a video chat app with a shared screen." />
                            <Bubble user="Ben" src="https://media.istockphoto.com/photos/woman-smiling-in-office-meeting-picture-id637901916" date="Yesterday" text="This is very cool!" />
                            <Bubble user="Jo" src="https://media.istockphoto.com/photos/man-with-beard-picture-id625978254" date="1d ago" text="Tutorial: Build a Twitch-like Video Chat App in 10 Minutes" />
                            <Bubble user="Julia" src="https://media.istockphoto.com/photos/man-casual-lifestyle-calm-solitude-concept-picture-id625388514" date="2d ago" text="Hey guys, just a note on how I see projects moving forward! So I think we need to use an Agile approach as far as possible. It will probably enable us to handle stuff a bit better with client requests coming through..." />
                            <Bubble user="Ben" src="https://media.istockphoto.com/photos/beautiful-woman-posing-against-dark-background-picture-id638756792" date="Yesterday" text="Yup, this is finally happening guys!" />

                        </div>
                    </div>

                    <Reply />

                </div>

                {this.props.common.drawer &&
                    <Drawer />
                }

                {/*<DrawerNav />*/}
            </div>
        )
    }
}

const mapMainPageStateToProps = (state) => ({
    common: state.common,
})

const mapMainPageDispatchToProps = (dispatch) => ({
})

export const Main = connect(
    mapMainPageStateToProps,
    mapMainPageDispatchToProps,
)(MainPage)
