import React, { PropTypes } from 'react'
import { ListItem, Chip} from 'material-ui'
import makeSelectable from './makeSelectable'

const Report = React.createClass({
    propTypes: {
        id: PropTypes.string.isRequired,
        selected: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        onReportSelect: PropTypes.func.isRequired,
        narrative: PropTypes.string.isRequired,
        glideWax: PropTypes.string.isRequired
    },
    render() {
        const { id, distance, selected, onReportSelect, narrative, glideWax } =
            this.props
        const open = selected === id
        return (
            makeSelectable(
                <ListItem
                  id={id}
                  primaryText={distance}
                  selected={selected}
                  onClick={() => { onReportSelect(id) }}
                  open={open}
                  autoGenerateNestedIndicator={false}
                  nestedItems={[
                      <ListItem key={id} disabled>
                          <Chip>{glideWax}</Chip>
                          <div>{narrative}</div>
                      </ListItem>
                  ]}
                />
            )
        )
    }
})

export default Report
