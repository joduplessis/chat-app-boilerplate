import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';

class TaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { ui } = this.props.common;
        const { level } = this.props;

        return(
            <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'stretch', alignContent: 'stretch', justifyContent: 'stretch' }} onClick={this.props.task}>

                <div style={ui.task.inner}>

                    <div style={ui.task.checkbox} />

                    <Avatar width={30} height={30} style={{ marginRight: 10 }} />

                    <div style={ui.task.text}>{this.props.text}</div>

                    <div style={{ margin: 'auto' }} />

                    {this.props.date &&
                        <div style={ui.task.date}>{this.props.date}</div>
                    }

                </div>

                {this.props.children &&
                    <div>
                        {this.props.children}
                    </div>
                }

            </div>
        )
    }
}

const mapTaskComponentStateToProps = (state) => ({
    common: state.common,
})

const mapTaskComponentDispatchToProps = (dispatch) => ({
})

export const Task = connect(
    mapTaskComponentStateToProps,
    mapTaskComponentDispatchToProps,
)(TaskComponent)
