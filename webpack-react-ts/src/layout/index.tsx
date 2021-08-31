import React from 'react'
export default () => {
    return (
        <div style={headBar} className="h-16">
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
        </div>
    )
}

const headBar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6cf'
}