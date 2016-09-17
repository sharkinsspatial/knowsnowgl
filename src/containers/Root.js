import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Toolbar } from 'material-ui'
import { Grid, Cell } from 'react-flexr'
import configureStore from '../store/configureStore'
import AsyncReports from './AsyncReports'
import ReportMap from '../components/ReportMap'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

const Application = ({ children }) => (
    <MuiThemeProvider>
        <div>
            <Toolbar />
            <Grid gutter={'0px'}>
                <Cell gutter={'0px'} size={0.25}>
                    {children}
                </Cell>
                <Cell gutter={'0px'}>
                    <ReportMap />
                </Cell>
            </Grid>
        </div>
    </MuiThemeProvider>
)

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Application}>
                <Route path="reports" component={AsyncReports} />
            </Route>
        </Router>
    </Provider>
)

export default Root
