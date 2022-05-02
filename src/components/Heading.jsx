import React, { Component } from 'react'
import { connect } from 'react-redux'

class HeadingComponent extends Component {
    render() {
        const { ui } = this.props.common;
        const textColor = this.props.textColor ? this.props.textColor : ui.heading.text;
        const countColor = this.props.countColor ? this.props.countColor : ui.heading.count;

        return(
            <div style={ui.heading.container}>
                <div style={ui.heading.title}>{this.props.text}</div>
                {this.props.children}
                <div style={{ margin: 'auto' }} />
            </div>
        )
    }
}


const mapHeadingComponentStateToProps = (state) => ({
    common: state.common,
})

const mapHeadingComponentDispatchToProps = (dispatch) => ({
})

export const Heading = connect(
    mapHeadingComponentStateToProps,
    mapHeadingComponentDispatchToProps,
)(HeadingComponent)
