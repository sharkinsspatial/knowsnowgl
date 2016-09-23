import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui'
import makeSelectable from './makeSelectable'

const Report = React.createClass({
    propTypes: {
        id: PropTypes.string.isRequired,
        selected: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        onReportSelect: PropTypes.func.isRequired
    },
    render() {
        const { id, distance, selected, onReportSelect } = this.props
        return (
            makeSelectable(
                <ListItem
                  id={id}
                  primaryText={distance}
                  selected={selected}
                  onClick={() => { onReportSelect(id) }}
                />
            )
        )
    }
})

export default Report
