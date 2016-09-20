/* global window setTimeout*/
import test from 'tape'
import reportActionsTest from './reportActionsTest'

test('Shutdown', (t) => {
    t.pass('Shutting down')
    t.end()
    setTimeout(() => {
        window.close()
    })
})
