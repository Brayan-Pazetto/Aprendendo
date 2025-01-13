import { Button } from './style'

import PropTypes from 'prop-types'

function defaultButton({children, theme, ...props}){

return (

    <Button{...props} theme={theme}>{children}</Button>

)

}

defaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
} 

export default defaultButton