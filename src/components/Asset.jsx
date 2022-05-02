import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AssetComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: false
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show() {
        this.setState({ label: true });
    }

    hide() {
        this.setState({ label: false });
    }

    render() {
        const { ui } = this.props.common;
        const { label } = this.state;
        const styles = Object.assign({
            flex: 1,
            borderRadius: ui.asset.radius,
            margin: ui.asset.margin,
            height: ui.asset.height,
            background: `url(${this.props.image}) no-repeat center center`,
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden'
        }, this.props.style);

        return(
            <div style={styles} onMouseEnter={this.show} onMouseLeave={this.hide}>

                {label &&
                    <div style={{ borderRadius: ui.asset.radius, background: 'linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0))', position: 'absolute', left: 0, bottom: 0, width: '100%' }}>
                        <div style={{ padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignContent: 'center' }}>
                            <div style={{ marginRight: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                {/*
                                <MaterialIcon icon="file_download" color='white' size={20}/>
                                */}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <div style={ui.asset.text}>
                                    {this.props.name}
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

const mapAssetComponentStateToProps = (state) => ({
    common: state.common
})

const mapAssetComponentDispatchToProps = (dispatch) => ({
})

export const Asset = connect(
    mapAssetComponentStateToProps,
    mapAssetComponentDispatchToProps,
)(AssetComponent)
