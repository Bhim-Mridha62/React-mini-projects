import React,{memo} from 'react'

function Memo1({fun}) {

    return (
        <div>
            {
                console.log("hello child")
            }
            <button onClick={fun}>Click</button>
            </div>
    )
}

 export default memo(Memo1)// usememo
// export default Memo1

