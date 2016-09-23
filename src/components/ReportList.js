import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { List } from 'material-ui'
import Report from './Report'

const ReportList = (props) => {
    const { items, ...other } = props
    return (
        <List>
            {items.map((item) => {
                const id = item.get('id')
                const distance = item.get('distance')
                return (
                    <Report
                      id={id}
                      key={id}
                      distance={distance}
                      {...other}
                    />
                )
            }
            )}
        </List>
    )
}

ReportList.propTypes = {
    items: ImmutablePropTypes.listOf(
        ImmutablePropTypes.contains({
            id: PropTypes.string.isRequired,
            distance: PropTypes.number.isRequired
        })
    ).isRequired,
    selected: PropTypes.string.isRequired,
    onReportSelect: PropTypes.func.isRequired
}

export default ReportList
