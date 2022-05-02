import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PopupComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { width, height, visible } = this.props
        const display = visible ? 'block' : 'none'
        const opacity = visible ? 1 : 0
        const containerWidth = visible ? '100%' : 0

        return(
            <div style={{ display: 'block', position: 'absolute', right: 0, top: 0, height: '100%', width: containerWidth, zIndex: 203 }}>
                <div style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '100%', zIndex: 203 }}>
                    <div style={{ display: 'block', position: 'absolute', right: 0, top: 0, height: '100%', width: '100%', backgroundColor: 'black', zIndex: 203, opacity: 0.5, cursor: 'pointer' }} onClick={this.props.action} />
                    <div style={{ opacity, background: 'black', borderRadius: 3, zIndex: 1000, position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)', height, width, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', alignContent: 'stretch', overflow: 'hidden', boxShadow: '0 4px 200px 0 rgba(0, 0, 0, 0.15)', transition: 'all 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000)' }}>
                         <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', background: 'white' }}>
                             {this.props.children}
                         </div>
                     </div>
                </div>
            </div>
        )
    }
}


const mapPopupComponentStateToProps = (state) => ({
    common: state.common,
})

const mapPopupComponentDispatchToProps = (dispatch) => ({
})

export const Popup = connect(
    mapPopupComponentStateToProps,
    mapPopupComponentDispatchToProps,
)(PopupComponent)
