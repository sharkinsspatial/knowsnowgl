/* global document */
import React from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Root from './containers/Root'

injectTapEventPlugin()
render(
    <Root />,
  document.getElementById('root')
)
