import test from 'tape'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../src/actions/reportActions'
import * as types from '../src/constants/action_types'

test('reports', (tt) => {
    tt.test('requestReports', (t) => {
        t.plan(1)
        const expected = {
            type: types.REQUEST_REPORTS
        }
        t.deepEqual(actions.requestReports(), expected,
                    'should create action to request reports')
    })

    tt.test('fetchReports', (t) => {
        t.plan(1)
        const midddlewares = [thunk]
        const mockStore = configureMockStore(midddlewares)
        fetchMock.get('*', { body: [] })
        const expected = [
            { type: types.REQUEST_REPORTS },
            { type: types.REQUEST_REPORTS_SUCCEEDED, items: [] }
        ]
        const store = mockStore()
        store.dispatch(actions.fetchReports()).then(() => {
            t.deepEqual(store.getActions(), expected,
                       'creates REQUEST_REPORTS_SUCCEEDED when fetching is done')
        })
        fetchMock.restore()
    })

    tt.end()
})
