import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchReports } from '../actions/reportActions'
import ReportList from '../components/ReportList'

const AsyncReports = React.createClass({
    propTypes: {
        dispatch: PropTypes.func.isRequired
    },
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchReports())
    },
    render() {
        return (
            <ReportList {...this.props} />
        )
    }
})

const mapStateToProps = state => ({
    isFetching: state.reports.get('isFetching'),
    items: state.reports.get('items')
})

export default connect(mapStateToProps)(AsyncReports)
