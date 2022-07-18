import React from 'react'

function Video ({url, title}) {
    return <div>
            <iframe
                width="919"
                height="525"
                src={url}
                frameBorder="0"
                allowFullScreen
                title={title}
             />
             <h1>{title}</h1>
            </div>
}

export default Video