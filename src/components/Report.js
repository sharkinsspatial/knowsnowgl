import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui'

const Report = ({ distance }) => (
    <ListItem
      primaryText={distance}
    />
)

Report.propTypes = {
    distance: PropTypes.number.isRequired
}

export default Report
