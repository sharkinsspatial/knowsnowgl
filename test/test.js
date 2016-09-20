/* global window setTimeout*/
import test from 'tape'
import reportActionsTest from './reportActionsTest'
import reportsTest from './reportsTest'
import ReportListTest from './ReportListTest'

test('Shutdown', (t) => {
    t.pass('Shutting down')
    t.end()
    setTimeout(() => {
        window.close()
    })
})
