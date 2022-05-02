import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from './Avatar';
import { Heading } from './Heading';
import { Stream } from './Stream';
import { Toolbar } from './Toolbar';
import { Contact } from './Contact';
import { More } from './More';

class DockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { ui } = this.props.common;

        return(
            <div style={ui.dock.container}>

                <div style={{ display: 'none', position: 'absolute', height: '100%', width: 375, background: 'linear-gradient(to bottom, #20A0FF, #1D8CE0)', top: 0, left: 0, zIndex: 1 }}>
                    <div style={{ padding: 30, paddingBottom: 0, paddingTop: 40, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <img src="images/icons/arrow_left.svg" height="16" style={{ marginRight: 20 }}/>
                        <div style={{ color: '#F2F6FC', fontSize: 22, fontWeight: 400 }}>
                            Contacts
                        </div>
                        <div style={{ margin: 'auto' }} />
                    </div>

                    <div style={{ padding: 30, paddingTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <div style={{ paddingLeft: 36, color: '#F2F6FC', fontSize: 13, fontWeight: 300 }}>
                            Hooray, you have <strong>34</strong> contacts.
                        </div>
                        <div style={{ margin: 'auto' }} />
                    </div>


                    <div style={{ padding: 30, paddingTop: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <img src="images/icons/search_white.svg" height="17" style={{ marginLeft: 36, }}/>
                        <div style={{ textDecoration: 'none', color: 'white', fontSize: 12, fontWeight: 400, marginLeft: 10 }}>
                            Filter contacts
                        </div>
                        <div style={{ margin: 'auto' }} />
                    </div>

                    <div style={{ paddingLeft: 65, paddingRight: 50 }}>
                        <Contact name="Jo du Plessis" handle="Developer" src="https://media.istockphoto.com/photos/woman-smiling-in-office-meeting-picture-id637901916" />
                        <Contact name="Julia Meeker" handle="Project Manager" src="https://media.istockphoto.com/photos/man-with-beard-picture-id625978254" />
                        <Contact name="Firstborn" handle="Creative Studio" src="https://digitalagencynetwork.com/wp-content/uploads/2015/03/crafted-digital-creative-studio-new-york-nyc.png" />
                        <Contact name="Hatch" handle="Product Factory" src="https://digitalagencynetwork.com/wp-content/uploads/2015/10/deutsch-marketing-communications-agency-los-angeles-new-york-usa.png" />
                        <Contact name="Arnab Sanjin" handle="Team Lead" src="https://media.istockphoto.com/photos/beautiful-woman-posing-against-dark-background-picture-id638756792" />
                        <Contact name="Jo du Plessis" handle="Developer" src="https://media.istockphoto.com/photos/woman-smiling-in-office-meeting-picture-id637901916" />
                        <Contact name="Julia Meeker" handle="Project Manager" src="https://media.istockphoto.com/photos/man-with-beard-picture-id625978254" />
                        <Contact name="Firstborn" handle="Creative Studio" src="https://digitalagencynetwork.com/wp-content/uploads/2015/03/crafted-digital-creative-studio-new-york-nyc.png" />
                        <Contact name="Hatch" handle="Product Factory" src="https://digitalagencynetwork.com/wp-content/uploads/2015/10/deutsch-marketing-communications-agency-los-angeles-new-york-usa.png" />
                    </div>
                </div>

                <Toolbar />

                <div style={ui.dock.inner}>
                    <div style={ui.dock.header.container}>



                        <img src="images/logo.png" style={{ height: 20 }} />

                        <div style={{ margin: 'auto' }} />

                        <Avatar
                            background={ui.dock.toolbar.container.background}
                            width={ui.dock.toolbar.size}
                            height={ui.dock.toolbar.size}
                            src="https://pbs.twimg.com/profile_images/860219093709926401/dsH1ib2b_400x400.jpg"
                            status="online"
                        />


                                                {/*


                        <img src="images/icons/user.svg" style={{ height: 20, marginLeft: 12 }} />
                        <img src="images/icons/explore.svg" style={{ height: 20, marginLeft: 10 }} />
                        <img src="images/icons/bell.svg" style={{ height: 20, marginLeft: 10 }} />


                        <div style={{ color: '#303133', fontSize: 13, fontWeight: 500, paddingLeft: 10 }}>
                            All conversations
                        </div>

                        <img src="images/icons/down.svg" height="8" style={{ marginLeft: 5 }}/>

                        <div style={{ margin: 'auto' }} />
                        <img src="images/icons/bolt.svg" height="18" />
                        <img src="images/icons/plus_stylized.svg" height="16" />

                        */}

                    </div>

                    <div style={ui.dock.search.container}>
                        <div style={ui.dock.search.inner}>
                            <img src="images/icons/search_stylized.svg" height="20" style={{ opacity: 0.2, }} />
                            <div style={ui.dock.search.text}>
                                Search conversations
                            </div>
                            <div style={{ margin: 'auto' }} />
                        </div>
                    </div>


                    <div style={ui.dock.scroll}>

                        <Heading text="Most recent" />

                        <div style={ui.dock.panels}>

                            <Stream name="Otees Colour" subtitle="Jo: This is very cool. I think we got a..." time="2d ago" src="https://occ-0-2433-1001.1.nflxso.net/art/83bd9/5d3d1475d4dbb1aae06e18704fc44ef9ee983bd9.jpg" />
                            <Stream name="Dev Stuff" subtitle="Warren: Okay great, thanks!" time="Now" src="http://onlysp.com/wp-content/uploads/2017/04/Campo-Santo.jpg" />
                            <Stream name="Chitter Chatter" subtitle="Julia: Can you guys please have a..." time="Yesterday" src="https://image.shutterstock.com/z/stock-vector-illustration-of-dog-hipster-with-tattoo-dressed-up-in-t-shirt-with-quote-337260533.jpg" />
                            <Stream name="UNSILO.me" subtitle="Mat: Thanks guys 😄" time="3h ago" src="https://image.freepik.com/free-vector/vector-illustration-of-a-cool-hipster_1441-18.jpg" />
                            <Stream name="Luna" subtitle="Warren: We did this to the back..." time="Last week" src="https://www.lesitedelasneaker.com/wp-content/images/2017/04/nike-air-max-97-metallic-gold-885691-700-5.jpg" />

                        </div>

                        <Heading text="All conversations" />

                        <div style={ui.dock.panels}>
                            <Stream name="Business Admin" subtitle="Jo: Nice one man, looking forward to it!" time="40m ago" src="http://www.fivebodyblade.net/wp-content/uploads/2013/01/IYF01_1280x960.jpg" />
                            <Stream name="SAB Expo" subtitle="Thule: Jo, please can you take a look at the..." time="45m ago" src="https://i.ytimg.com/vi/e-smfG5cokw/maxresdefault.jpg" />
                            <Stream name="Chow Platform" subtitle="Stefan: Awesome - great." time="Last year" src="https://agencycompile.blob.core.windows.net/legacy/10455/resized_bigspaceship_logo_red_570_198.png" />

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


const mapDockComponentStateToProps = (state) => ({
    common: state.common,
})

const mapDockComponentDispatchToProps = (dispatch) => ({
})

export const Dock = connect(
    mapDockComponentStateToProps,
    mapDockComponentDispatchToProps,
)(DockComponent)
