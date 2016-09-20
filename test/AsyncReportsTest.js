import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import test from 'tape'
import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme'
import AsyncReports from '../src/containers/AsyncReports'
import * as types from '../src/constants/action_types'

const setup = () => {
    // Lots of ceremony to fully render component.
    const mockStore = configureMockStore([thunk])
    const reports = Immutable.fromJS({ isFetching: false, items: [] })
    const store = mockStore({ reports })
    const wrapper = mount(
        <MuiThemeProvider>
            <Provider store={store}>
                <AsyncReports />
            </Provider>
        </MuiThemeProvider>
    )
    return { store, wrapper }
}
test('AsyncReports', (t) => {
    t.plan(1)
    const { store } = setup()
    t.equals(store.getActions()[0].type, types.REQUEST_REPORTS,
             'Dispatches fetchReports when component is mounted')
})
