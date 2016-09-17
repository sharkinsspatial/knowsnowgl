import fetchPonyFill from 'fetch-ponyfill'

export const REQUEST_REPORTS = 'REQUEST_REPORTS'
export const REQUEST_REPORTS_FAILURE = 'REPORTS_REQUEST_FAILURE'
export const REQUEST_REPORTS_SUCCEEDED = 'REQUEST_REPORTS_SUCCEEDED'
const { fetch } = fetchPonyFill()
const rootUrl = 'http://knowsnowapi.herokuapp.com'

function requestReports() {
    return {
        type: REQUEST_REPORTS
    }
}

function requestReportsSucceeded(json) {
    return {
        type: REQUEST_REPORTS_SUCCEEDED,
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
