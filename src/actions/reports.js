import fetchPonyFill from 'fetch-ponyfill'
import * as types from '../constants/action_types'

const { fetch } = fetchPonyFill()
const rootUrl = 'http://knowsnowapi.herokuapp.com'

function requestReports() {
    return {
        type: types.REQUEST_REPORTS
    }
}

function requestReportsSucceeded(json) {
    return {
        type: types.REQUEST_REPORTS_SUCCEEDED,
        items: json,
        receivedAt: Date.now()
    }
}

export function fetchReports() {
    return (dispatch) => {
        const url = `${rootUrl}/api/Reports?filter[order]=startTime` +
                    `%20DESC&filter[include]=imageMetadatas&` +
                    `filter[include][owner][identities]&filter[limit]=15`
        dispatch(requestReports)
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(requestReportsSucceeded(json)))
    }
}
