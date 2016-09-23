import test from 'tape'
import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import ReportList from '../src/components/ReportList'
import Report from '../src/components/Report'

const setup = () => {
    const items = [{ id: '0', distance: 0 }, { id: '1', distance: 1 }]
    const props = {
        items: Immutable.fromJS(items),
        selected: '0',
        onReportSelect: () => {}
    }
    const wrapper = shallow(<ReportList {...props} />)
    return { props, wrapper }
}

test('ReportList', (t) => {
    t.plan(1)
    const { wrapper } = setup()
    t.equals(wrapper.find(Report).length, 2,
            'Renders a Report for each item in items prop')
})
