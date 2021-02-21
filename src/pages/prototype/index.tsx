import React, { useEffect } from 'react';
import { connect, createLocalTracks } from 'twilio-video';


const Prototype = () : JSX.Element => {

    useEffect(() => {
        console.log('Log')
    }, [])

    return (
        <div>
            <p>Prototype</p>
            <div className="myVideo">
            </div>
            <div className="otherVideo">
            </div>
        </div>
    )
}

export default Prototype;