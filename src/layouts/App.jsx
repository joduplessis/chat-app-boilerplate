import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, } from 'react-router'
import { Main } from '../pages'
import { Toolbar, Dock } from '../components'

export class AppLayout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { ui } = this.props.common;

        return(
            <div style={{ background: 'white', overflow: 'hidden', flex: 1, height: '100%', width: '100%', overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'stretch', alignItems: 'stretch', alignContent: 'stretch' }}>
                <div style={{ background: 'white', overflow: 'hidden', flex: 1, height: '100%', width: '100%', overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'stretch', alignContent: 'stretch' }}>
                    <Dock />

                    <div style={{ zIndex: 4, position: 'relative', flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', alignContent: 'stretch' }}>

                        <Switch>
                            <Route exact path='/' render={({ history })  => (<Main />)}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapAppLayoutStateToProps = (state) => ({
    common: state.common,
})

const mapAppLayoutDispatchToProps = (dispatch) => ({
})

export const App = connect(
    mapAppLayoutStateToProps,
    mapAppLayoutDispatchToProps,
)(AppLayout)
