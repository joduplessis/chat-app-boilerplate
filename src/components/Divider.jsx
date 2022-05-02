import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';

class DividerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { ui } = this.props.common;

        return(
            <div style={{ width: '100%', position: 'relative', paddingBottom: 20, marginTop: 10, marginBottom: 10 }}>
                <div style={{ padding: 10, flexDirection: 'column', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <div style={ui.divider}>{this.props.text}</div>
                </div>
            </div>
        );
    }
}

const mapDividerComponentStateToProps = (state) => ({
    common: state.common,
    project: state.project
})

const mapDividerComponentDispatchToProps = (dispatch) => ({
})

export const Divider = connect(
    mapDividerComponentStateToProps,
    mapDividerComponentDispatchToProps,
)(DividerComponent)
