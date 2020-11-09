import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className="showbox">
            <div className="loader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" stroke="#0057e7" fill="none" strokeWidth="4" strokeMiterlimit="10" />
                </svg>
            </div>
        </div>
    )
}

export default Loading
