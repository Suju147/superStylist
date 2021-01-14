import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Alert = () => {
    const alert = useSelector(state => state.alert)
    const  {message , show,status} = alert
    const dispatch = useDispatch();



    useEffect(()=>{
        setTimeout(() => {
            dispatch({
                type:"REMOVE_ERROR"
            })
        }, 1000);
    },[show])

    return (
        <div className="Alert_Box" style={{display:show?"":"none",backgroundColor:status?"teal":"slategray"}}>
            <div>{message}</div>
        </div>
    )
}

export default Alert
