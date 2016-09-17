import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { List } from 'material-ui'
import Report from './Report'

const ReportList = ({ items }) => (
    <List>
        {items.map(item =>
            <Report
              key={item.get('id')}
              distance={item.get('distance')}
            />
        )}
    </List>
)

ReportList.propTypes = {
    items: ImmutablePropTypes.listOf(
        ImmutablePropTypes.contains({
            id: PropTypes.string.isRequired,
            distance: PropTypes.number.isRequired
        })
    ).isRequired
}

export default ReportList
