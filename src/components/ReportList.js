import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { List, RefreshIndicator } from 'material-ui'
import Report from './Report'

const ReportList = (props) => {
    const { items, isFetching, ...other } = props
    return (
        <div>
            <div
              style={{ display: 'flex',
                       flex: '1',
                       alignItems: 'center',
                       justifyContent: 'center',
                       visibility: isFetching ? 'visible' : 'hidden' }}
            >
                <div style={{ position: 'relative', alignSelf: 'center' }}>
                    <RefreshIndicator
                      size={100}
                      left={-50}
                      top={50}
                      status={isFetching ? 'loading' : 'hide'}
                    />
                </div>
            </div>
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
        </div>
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
    onReportSelect: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default ReportList
