import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from './Avatar';
import { Line, Circle } from 'rc-progress';

class StreamComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { ui } = this.props.common;
        {/*

        const blank = this.props.blank ? this.props.blank : false;
        const blankBorder = this.props.blankBorder ? this.props.blankBorder : false;


        let textStyle = Object.assign({}, ui.stream.title);

        textStyle.color = this.props.blankBorder ? this.props.blankBorder : ui.stream.title.color;
        textStyle.fontWeight = this.props.count ? 600 : ui.stream.title.fontWeight;

        */}

        return(
            <div style={ui.stream.container} onClick={this.props.action}>

                {/*
                {this.props.progress &&
                    <Circle percent={this.props.progress} strokeWidth="10" trailWidth="10" trailColor={ui.stream.trail} strokeColor={ui.stream.stroke} style={{ marginRight: 10, marginLeft: -24, position: 'relative', left: 2, width: 14, height: 14 }}/>
                }
                */}

                <Avatar width={ui.stream.size} height={ui.stream.size} borderRadius={ui.stream.radius} src={this.props.src} style={{ marginRight: 15 }} />

                <div style={ui.stream.inner}>

                    <div style={ui.stream.title.container}>
                        <div style={ui.stream.title.text}>
                            {this.props.name}
                        </div>

                        <div style={ui.stream.title.time}>
                            {this.props.time}
                        </div>
                    </div>

                    <div style={ui.stream.subtitle}>
                        {this.props.subtitle}
                    </div>
                </div>




            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    common: state.common,
})

const mapDispatchToProps = (dispatch) => ({
})

export const Stream = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StreamComponent)
