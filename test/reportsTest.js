import test from 'tape'
import Immutable from 'immutable'
import reports from '../src/reducers/reports'
import * as types from '../src/constants/action_types'

test('reports', (t) => {
    t.plan(2)
    const initialState = Immutable.fromJS({
        isFetching: false,
        items: [],
        selected: 'x' })
    t.ok(Immutable.is(reports(undefined, {}), initialState),
        'Provides empty initial state as default')

    const reportsSucceededState = Immutable.fromJS({
        isFetching: false,
        items: [{ id: '0' }, { id: '1' }],
        lastUpdated: true,
        selected: '0' })
    t.ok(Immutable.is(reports(undefined, {
        type: types.REQUEST_REPORTS_SUCCEEDED,
        items: [{ id: '0' }, { id: '1' }],
        receivedAt: true,
        selected: '0' }), reportsSucceededState),
        'Provides correct state for REQUEST_REPORTS_SUCCEEDED')
})
