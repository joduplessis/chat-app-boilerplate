import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { drawerVisibility } from '../actions'

class DrawerNavComponent extends Component {
    constructor(props) {
        super(props)

        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    toggleDrawer() {
        this.props.toggleDrawerVisibility(!this.props.common.drawer);
    }

    render() {
        const { ui } = this.props.common;

        return(
            <div style={ui.drawer.nav.container}>
                <div style={ui.drawer.nav.scroll}>

                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/bars.svg" style={ui.drawer.nav.icon} /></div>

                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/team.svg" style={ui.drawer.nav.icon} /></div>

                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/user.svg" style={ui.drawer.nav.icon} /><div style={ui.drawer.nav.count}>3</div></div>
                    <div style={ui.drawer.nav.button_inactive} onClick={this.toggleDrawer}><img src="images/icons/check.svg" style={ui.drawer.nav.icon} /></div>

                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/attach.svg" style={ui.drawer.nav.icon} /></div>

                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/video.svg" style={ui.drawer.nav.icon} /></div>
                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/mic.svg" style={ui.drawer.nav.icon} /></div>
                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/star.svg" style={ui.drawer.nav.icon} /></div>
                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/search.svg" style={ui.drawer.nav.icon} /></div>
                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/plus.svg" style={ui.drawer.nav.icon} /></div>
                    
                    <div style={ui.drawer.nav.button_inactive}><img src="images/icons/ev.svg" style={ui.drawer.nav.icon} /></div>

                    <div style={{ margin: 'auto' }} />

                </div>
            </div>
        )
    }
}

const mapDrawerNavComponentStateToProps = (state) => ({
    common: state.common
})

const mapDrawerNavComponentDispatchToProps = (dispatch) => ({
    toggleDrawerVisibility: (visibility) => {
        dispatch(drawerVisibility(visibility));
    },
})

export const DrawerNav = connect(
    mapDrawerNavComponentStateToProps,
    mapDrawerNavComponentDispatchToProps,
)(DrawerNavComponent)
