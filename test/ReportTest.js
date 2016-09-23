import React from 'react'
import test from 'tape'
import { mount } from 'enzyme'
import sinon from 'sinon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Report from '../src/components/Report'

const setup = () => {
    const onReportSelect = sinon.spy()
    const props = { id: '0', selected: '0', distance: 0, onReportSelect }
    injectTapEventPlugin()
    const wrapper = mount(
        <MuiThemeProvider><Report {...props} /></MuiThemeProvider>
    )
    return { wrapper, onReportSelect }
}

test('Report', (t) => {
    t.plan(1)
    const { wrapper, onReportSelect } = setup()
    const span = wrapper.find('span')
    span.simulate('click')
    t.ok(onReportSelect.calledWith('0'),
        'Clicking a report calls onReportSelect with the correct report id')
})
