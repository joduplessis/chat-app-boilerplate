import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from './Avatar';

class ReplyComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { ui } = this.props.common;

        return(
            <div style={ui.reply.container}>

                <div style={ui.reply.reply}>

                    <input readOnly placeholder="Leave a comment" value="Reply" style={ui.reply.input} />
                    <img src="images/icons/mic.svg" style={ui.reply.icon}/>
                    <img src="images/icons/video.svg" style={ui.reply.icon}/>
                    <img src="images/icons/attach.svg" style={ui.reply.icon}/>
                    <img src="images/icons/smile.svg" style={ui.reply.icon}/>
                </div>

            </div>
        )
    }
}


const mapReplyComponentStateToProps = (state) => ({
    common: state.common,
})

const mapReplyComponentDispatchToProps = (dispatch) => ({
})

export const Reply = connect(
    mapReplyComponentStateToProps,
    mapReplyComponentDispatchToProps,
)(ReplyComponent)
