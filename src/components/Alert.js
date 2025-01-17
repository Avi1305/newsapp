import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{ height: "60px",overflow:"hidden",marginTop:0 }}>
            {props.alert && <div  className={`alert my-1 alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}

            </div>}
        </div>
    )
}

export default Alert
