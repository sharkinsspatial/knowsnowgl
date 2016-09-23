import React, { PropTypes } from 'react'
import { fade } from 'material-ui/utils/colorManipulator'

const makeSelectable = (Component) => {
    const Wrapper = React.createClass({
        contextTypes: {
            muiTheme: PropTypes.object.isRequired
        },
        changeStyleProps(child) {
            if (child && child.type && child.type.muiName === 'ListItem') {
                let selectedChildrenStyles
                const styles = {}
                const textColor = this.context.muiTheme.baseTheme.palette.textColor
                styles.backgroundColor = fade(textColor, 0.2)

                if (child.props.selected === child.props.id) {
                    selectedChildrenStyles = Object.assign({}, styles)
                }

                const mergedChildrenStyles = Object.assign({}, child.props.style,
                                                           selectedChildrenStyles)

                return React.cloneElement(child, {
                    style: mergedChildrenStyles
                })
            } else {
                return child
            }
        },
        render() {
            return (
                this.changeStyleProps(Component)
            )
        }
    })
    return <Wrapper />
}
export default makeSelectable
