import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tippy';
import { Avatar } from './Avatar';
import { drawerVisibility } from '../actions'

class HeaderComponent extends Component {
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
            <div style={ui.header.container}>

                <div style={ui.header.inner}>
                    <div style={ui.header.title.text}>
                        {this.props.text}
                    </div>

                    <div style={ui.header.title.label}>
                        {this.props.label} &trade;
                    </div>

                    <div style={{ margin: 'auto' }} />

                    <div style={ui.header.label.container}>
                        <img src="images/icons/star.svg" style={ui.header.label.icon} />
                    </div>

                    <div style={ui.header.label.container}>
                        <img src="images/icons/search_stylized.svg" style={ui.header.label.icon} />
                    </div>

                    <div style={ui.header.label.container} onClick={this.toggleDrawer}>
                        <img src="images/icons/bars_stylized.svg" style={ui.header.label.icon} />
                    </div>
                </div>
            </div>
        )
    }
}


const mapHeaderComponentStateToProps = (state) => ({
    common: state.common,
})

const mapHeaderComponentDispatchToProps = (dispatch) => ({
    toggleDrawerVisibility: (visibility) => {
        dispatch(drawerVisibility(visibility));
    },
})

export const Header = connect(
    mapHeaderComponentStateToProps,
    mapHeaderComponentDispatchToProps,
)(HeaderComponent)
