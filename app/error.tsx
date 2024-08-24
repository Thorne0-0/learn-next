"use client"

import { use, useEffect } from "react"

export default function Error({error,reset}:{
    error:Error & {digest?:string},
    reset:()=>void
}){
    useEffect(()=>{
        console.log(error)
    },[error])
    return(
        <div className="text-center">
            <h1>Error</h1>
            <p>Something went wrong! {error.message}</p>
            <button onClick={()=>reset()}> Try again</button>
        </div>
    )
}