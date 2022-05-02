import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from './Avatar';
import { Heading } from './Heading';
import { Task } from './Task';
import { More } from './More';
import { Header } from './Header';
import { Asset } from './Asset';
import { DrawerNav } from './DrawerNav';

class DrawerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ui } = this.props.common;

        return(
            <div style={ui.drawer.container}>

                <div style={{ width: '100%', flex: 1, overflow: 'scroll' }}>

                    <div style={{ position: 'relative', display: 'block', paddingBottom: 100 }}>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingTop: 50, paddingBottom: 10 }}>
                            <Avatar src="https://media.istockphoto.com/photos/businessman-smiling-in-business-office-environment-picture-id637914452" width={150} height={150} />
                        </div>

                        <div style={ui.drawer.panels}>

                            <Heading text="Overview"/>

                            <div style={ui.drawer.overview}>
                                This is a space for handling all sorts of miscellaneous issues around product launches, ideas & general tips.
                            </div>

                        </div>

                        <div style={ui.drawer.panels}>

                            <Heading text="Members"/>

                            <div style={{ display: 'flex', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', flexWrap: 'wrap' }}>
                                <Avatar src="https://media.istockphoto.com/photos/man-with-beard-picture-id625978254" width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/woman-smiling-in-office-meeting-picture-id637901916" width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/businessman-smiling-in-business-office-environment-picture-id637914452" width={30} height={30} status="busy" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/portrait-of-a-man-picture-id629944712" width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/working-picture-id641859288" width={30} height={30} status="busy" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/young-woman-on-the-phone-picture-id637815476" width={30} height={30} status="online" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/beautiful-woman-posing-against-dark-background-picture-id638756792" width={30} height={30} status="busy" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/man-casual-lifestyle-calm-solitude-concept-picture-id625388514" width={30} height={30} status="busy" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/man-with-beard-picture-id625978254" width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/woman-smiling-in-office-meeting-picture-id637901916" width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/businessman-smiling-in-business-office-environment-picture-id637914452" width={30} height={30} status="busy" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/portrait-of-a-man-picture-id629944712" width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/working-picture-id641859288" width={30} height={30} status="busy" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/young-woman-on-the-phone-picture-id637815476" width={30} height={30} status="online" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar src="https://media.istockphoto.com/photos/dog-golden-retriever-picture-id835817610" width={30} height={30} status="online" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar width={30} height={30} status="online" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar width={30} height={30} status="online" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar width={30} height={30} status="online" style={{ marginRight: 3, marginBottom: 3 }} />
                                <Avatar width={30} height={30} style={{ marginRight: 3, marginBottom: 3 }} blankBorder={ui.drawer.blankBorder} blank={true} />
                            </div>

                        </div>

                        <div style={ui.drawer.panels}>

                            <Heading text="Tasks due date">
                                <img src="images/icons/down.svg" height="8" style={{ marginLeft: 10 }}/>
                            </Heading>

                            <Task text="Research & proj..." level={0}/>
                            <Task text="Log this in Toggl" level={0}/>
                            <Task text="This is a parent task" level={0}/>
                            <Task text="This is the first task" level={0}/>
                            <Task text="Updated the..." level={0} date="Today"/>
                            <Task text="General project..." level={0} />

                            <More text="Show completed tasks" />

                        </div>

                        <div style={ui.drawer.panels}>

                            <Heading text="Assets"/>

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' }}>
                                <Asset image="http://magicfabricblog.com/wp-content/uploads/2014/01/tamas2.jpg" name="gamepla..." style={{ marginLeft: 0 }} />
                                <Asset image="https://i.pinimg.com/736x/57/ef/03/57ef030033d7d7ef1e5db9fb5b646806--hipster-illustration-couple-illustration.jpg" name="about_us.p.." style={{ marginRight: 0 }}/>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' }}>
                                <Asset image="https://image.shutterstock.com/z/stock-vector-illustration-of-dog-hipster-with-tattoo-dressed-up-in-t-shirt-with-quote-337260533.jpg" name="strategy.do.." style={{ marginLeft: 0 }} />
                                <Asset image="https://image.freepik.com/free-vector/vector-illustration-of-a-cool-hipster_1441-18.jpg" name="taxonomy..." style={{ marginRight: 0 }} />
                            </div>

                            <More text="Show all assets" />

                        </div>





                    </div>
                </div>
            </div>
        )
    }
}

const mapDrawerComponentStateToProps = (state) => ({
    common: state.common
})

const mapDrawerComponentDispatchToProps = (dispatch) => ({
})

export const Drawer = connect(
    mapDrawerComponentStateToProps,
    mapDrawerComponentDispatchToProps,
)(DrawerComponent)
