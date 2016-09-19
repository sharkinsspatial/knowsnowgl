/* global window setTimeout*/
import test from 'tape'
import reportTest from './reportsTest'

test('Shutdown', (t) => {
    t.pass('Shutting down')
    t.end()
    setTimeout(() => {
        window.close()
    })
})
