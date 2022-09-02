import React, {memo} from "react";
import PropTypes from "prop-types";


export const ToolHeader = memo(({headerText}) => {
    console.log("rendering Tool Header")
    return (
        <header>
            <h1>{headerText}</h1>
        </header>
    )

})

ToolHeader.defaultProps = {

    headerText: "No Text Specified"
}

ToolHeader.propTypes = {

    headerText: PropTypes.string,
}