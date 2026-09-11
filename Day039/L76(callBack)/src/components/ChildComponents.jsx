import React from 'react'

const ChildComponents = React.memo(
    (props) => {

        console.log("rendering again");
    return (
        <div>
        <button>
            {props.buttonName}
        </button>
        </div>
    )
    }
)

export default ChildComponents
