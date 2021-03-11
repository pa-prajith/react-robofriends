import React from 'react'

const Scroll = ({children}) => {
    return (
        <div style={{paddingTop: '10px', marginTop: '20px', borderTop: '1px solid #fff', overflow: 'scroll', height: '100vh'}}>
            {children}
        </div>
    )
}

export default Scroll;
