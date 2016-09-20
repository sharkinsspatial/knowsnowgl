import test from 'tape'
import Immutable from 'immutable'
import reports from '../src/reducers/reports'
import * as types from '../src/constants/action_types'

test('reports', (t) => {
    t.plan(2)
    const initialState = Immutable.fromJS({ isFetching: false, items: [] })
    t.ok(Immutable.is(reports(undefined, {}), initialState),
        'Provides empty initial state as default')

    const reportsSucceededState = Immutable.fromJS({ isFetching: false,
                                                   items: [0, 1],
                                                   lastUpdated: true })
    t.ok(Immutable.is(reports(undefined, {
        type: types.REQUEST_REPORTS_SUCCEEDED,
        items: [0, 1],
        receivedAt: true }), reportsSucceededState),
        'Provides correct state for REQUEST_REPORTS_SUCCEEDED')
})
