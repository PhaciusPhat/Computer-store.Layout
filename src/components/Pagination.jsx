import React from 'react'

function Pagination() {
    return (
        <>
            <div className="center-absolute container w-100 text-center">
                <button className="btn"><i className="fas fa-arrow-alt-circle-left"></i></button>
                <span>1/1</span>
                <button className="btn"><i className="fas fa-arrow-alt-circle-right"></i></button>
            </div>
        </>
    )
}

export default Pagination