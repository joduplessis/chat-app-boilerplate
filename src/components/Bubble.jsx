import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';

class BubbleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { ui } = this.props.common;
        const background = this.props.me ? ui.bubble.background_me : ui.bubble.background;
        const color = this.props.me ? ui.bubble.text_me : ui.bubble.text;    

        return(
            <div style={{ width: '100%', position: 'relative' }}>
                <div style={{ padding: 30, paddingBottom: 20, paddingTop: 0, flexDirection: 'row', display: 'flex', alignItems: 'stretch', alignContent: 'stretch', justifyContent: 'stretch' }}>
                    <Avatar width={ui.bubble.size} height={ui.bubble.size} src={this.props.src} style={{ marginRight: 15 }} />

                    <div style={{ flex: 1, flexDirection: 'column', display: 'flex', alignItems: 'flex-start', alignContent: 'flex-start', justifyContent: 'flex-start' }}>

                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingBottom: 2 }}>
                            <div style={ui.bubble.user}>{this.props.user}</div>
                            <div style={ui.bubble.date}>{this.props.date}</div>
                            <div style={{ margin: 'auto' }} />
                        </div>

                        {this.props.me &&
                            <div style={ui.bubble.me.container}>
                                <div style={ui.bubble.me.text}>
                                    {this.props.text}
                                </div>
                            </div>
                        }

                        {!this.props.me &&
                            <div style={ui.bubble.them.container}>
                                <div style={ui.bubble.them.text}>
                                    {this.props.text}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapBubbleComponentStateToProps = (state) => ({
    common: state.common,
    project: state.project
})

const mapBubbleComponentDispatchToProps = (dispatch) => ({
})

export const Bubble = connect(
    mapBubbleComponentStateToProps,
    mapBubbleComponentDispatchToProps,
)(BubbleComponent)
