import Immutable from 'immutable'
import * as types from '../constants/action_types'

const initialState = Immutable.fromJS({ isFetching: false, items: [], selected: 'x' })
function reports(state = initialState, action) {
    switch (action.type) {
    case types.REQUEST_REPORTS:
        return state.merge({
            isFetching: true
        })

    case types.REQUEST_REPORTS_SUCCEEDED:
        return state.merge({
            isFetching: false,
            items: action.items,
            lastUpdated: action.receivedAt,
            selected: action.items.length > 0 ? action.items[0].id : 'x'
        })

    case types.SELECT_REPORT:
        return state.merge({
            selected: action.id
        })

    default:
        return state
    }
}
export default reports
