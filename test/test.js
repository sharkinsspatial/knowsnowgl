/* global window setTimeout*/
import test from 'tape'
import reportActionsTest from './reportActionsTest'
import reportsTest from './reportsTest'

test('Shutdown', (t) => {
    t.pass('Shutting down')
    t.end()
    setTimeout(() => {
        window.close()
    })
})
