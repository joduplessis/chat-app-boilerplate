import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from './Avatar';

class ContactComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    getStatusColor(status) {

        switch(status) {
            case "online":
                return '#1FC588';
                break;
            case "away":
                return '#FD8B43';
                break;
            case "busy":
                return 'red';
                break;
            default:
                return 'rgba(255, 255, 255, 0.2)';
                break;
        }
    }

    render() {
        const { ui } = this.props.common;
        const status = this.props.status ? this.props.status : "default";

        return(
            <Link to='/messaging' style={ui.contact.container}>

                <Avatar width={ui.contact.size} height={ui.contact.size} src={this.props.src} status={status} style={{ marginRight: 15 }} />

                <div style={ui.contact.title}>
                    {this.props.name}
                </div>

                <div style={{ margin: 'auto' }} />

                {this.props.count &&
                    <div style={ui.contact.count}>
                        {this.props.count}
                    </div>
                }

                <div style={ui.contact.label}>
                    {this.props.handle}
                </div>
            </Link>
        )
    }
}


const mapStateToProps = (state) => ({
    common: state.common,
})

const mapDispatchToProps = (dispatch) => ({
})

export const Contact = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactComponent)
