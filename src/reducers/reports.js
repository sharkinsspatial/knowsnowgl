import Immutable from 'immutable'
import { REQUEST_REPORTS, REQUEST_REPORTS_SUCCEEDED } from '../actions/reports'

const initialState = Immutable.fromJS({ isFetching: false, items: [] })
function reports(state = initialState, action) {
    switch (action.type) {
    case REQUEST_REPORTS:
        return state.merge({
            isFetching: true
        })

    case REQUEST_REPORTS_SUCCEEDED:
        return state.merge({
            isFetching: false,
            items: action.items,
            lastUpdated: action.receivedAt
        })

    default:
        return state
    }
}
export default reports
