/* global fetch*/
import 'isomorphic-fetch'
import * as types from '../constants/action_types'

const rootUrl = 'http://knowsnowapi.herokuapp.com'

export function requestReports() {
    return {
        type: types.REQUEST_REPORTS
    }
}

export function requestReportsSucceeded(json) {
    return {
        type: types.REQUEST_REPORTS_SUCCEEDED,
        items: json
    }
}

export function fetchReports() {
    return (dispatch) => {
        const url = `${rootUrl}/api/Reports?filter[order]=startTime` +
                    `%20DESC&filter[include]=imageMetadatas&` +
                    `filter[include][owner][identities]&filter[limit]=15`
        dispatch(requestReports())
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(requestReportsSucceeded(json)))
    }
}
