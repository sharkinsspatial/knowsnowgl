import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchReports, selectReport } from '../actions/reportActions'
import ReportList from '../components/ReportList'

const AsyncReports = React.createClass({
    propTypes: {
        onMount: PropTypes.func.isRequired
    },
    componentDidMount() {
        this.props.onMount()
    },
    render() {
        return (
            <ReportList {...this.props} />
        )
    }
})

const mapStateToProps = state => ({
    isFetching: state.reports.get('isFetching'),
    items: state.reports.get('items'),
    selected: state.reports.get('selected'),
})

const mapDispatchToProps = dispatch => ({
    onReportSelect: (id) => {
        dispatch(selectReport(id))
    },
    onMount: () => {
        dispatch(fetchReports())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AsyncReports)
