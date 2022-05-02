import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from './Avatar';

class ToolbarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { ui } = this.props.common;

        return(
            <div style={ui.dock.toolbar.container}>

                <div style={{ height: 20 }} />

                <Avatar
                    borderRadius={ui.dock.toolbar.radius}
                    background={ui.dock.toolbar.container.background}
                    width={ui.dock.toolbar.size}
                    height={ui.dock.toolbar.size}
                    src="https://digitalagencynetwork.com/wp-content/uploads/2015/10/deutsch-marketing-communications-agency-los-angeles-new-york-usa.png"
                    style={{ marginBottom: ui.dock.toolbar.spacing }}
                />

                <div style={{ width: ui.dock.toolbar.size+4, height: ui.dock.toolbar.size+4, borderRadius: ui.dock.toolbar.radius, border: '2px solid #DCDFE6', marginBottom: ui.dock.toolbar.spacing }}>
                    <Avatar
                        borderRadius={ui.dock.toolbar.radius}
                        background={ui.dock.toolbar.container.background}
                        width={ui.dock.toolbar.size}
                        height={ui.dock.toolbar.size}
                        src="https://agencycompile.blob.core.windows.net/legacy/10455/resized_bigspaceship_logo_red_570_198.png"
                        style={{ position: 'relative', top: 2, left: 2 }}
                    />
                </div>

                <Avatar
                    borderRadius={ui.dock.toolbar.radius}
                    background={ui.dock.toolbar.container.background}
                    width={ui.dock.toolbar.size}
                    height={ui.dock.toolbar.size}
                    src="http://www.fivebodyblade.net/wp-content/uploads/2013/01/IYF01_1280x960.jpg"
                    style={{ marginBottom: ui.dock.toolbar.spacing }}
                />

                <div style={{ margin: 'auto' }} />

                <img src="images/icons/ev.svg" style={ui.dock.toolbar.icon} />
                <img src="images/icons/user.svg" style={ui.dock.toolbar.icon} />
                <img src="images/icons/explore.svg" style={ui.dock.toolbar.icon} />
                <img src="images/icons/bell.svg" style={ui.dock.toolbar.icon} />

                <Avatar
                    background={ui.dock.toolbar.container.background}
                    width={ui.dock.toolbar.size}
                    height={ui.dock.toolbar.size}
                    src="https://pbs.twimg.com/profile_images/860219093709926401/dsH1ib2b_400x400.jpg"
                    status="online"
                />

                <div style={{ height: 20 }} />

            </div>
        )
    }
}

const mapToolbarComponentStateToProps = (state) => ({
    common: state.common
})

const mapToolbarComponentDispatchToProps = (dispatch) => ({
})

export const Toolbar = connect(
    mapToolbarComponentStateToProps,
    mapToolbarComponentDispatchToProps,
)(ToolbarComponent)
