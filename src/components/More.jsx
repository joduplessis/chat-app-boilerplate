import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { ui } = this.props.common;

        return <div style={ui.more}>{this.props.text}</div>;
    }
}


const mapMoreComponentStateToProps = (state) => ({
    common: state.common,
})

const mapMoreComponentDispatchToProps = (dispatch) => ({
})

export const More = connect(
    mapMoreComponentStateToProps,
    mapMoreComponentDispatchToProps,
)(MoreComponent)
