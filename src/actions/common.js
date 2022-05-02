import { hashHistory } from 'react-router'
import axios from 'axios'

export function drawerVisibility(visibility) {
    return {
        type: 'DRAWER',
        payload: visibility,
    }
}

/*

export function actionMethodThunkExample() {
    return function(dispatch: any, getState: any) {
        dispatch(actionMethod())
    }
}

*/
