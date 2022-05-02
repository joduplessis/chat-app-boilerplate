import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ButtonComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { ui } = this.props.common;
        const styles = Object.assign(ui.button, this.props.style);

        return(
            <div style={styles} onClick={this.props.action}>
                <div style={{ color: 'white', fontSize: 12, fontWeight: 500, }}>{this.props.text}</div>
            </div>
        )
    }
}


const mapButtonComponentStateToProps = (state) => ({
    common: state.common
})

const mapButtonComponentDispatchToProps = (dispatch) => ({
})

export const Button = connect(
    mapButtonComponentStateToProps,
    mapButtonComponentDispatchToProps,
)(ButtonComponent)
