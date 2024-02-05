import React from 'react'

function ShowAllData({jdata}) {
    return (
        <div>
        <pre>{JSON.stringify(jdata, null, 2)}</pre>
    </div>
    )
}

export default ShowAllData
