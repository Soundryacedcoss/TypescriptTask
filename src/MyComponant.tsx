import React from 'react'
// Defining props type here
type MyComponantProps = {
    name: string
    age: number
    logedIn:boolean
}
export const MyComponant = (props: MyComponantProps) => {
    return (
        <div>
            <h2>welcome {props.name}</h2>
            <p>Age is {props.age}</p>
            <b>Logged in status :: {props.logedIn ? "yes Logged in":"no"}</b>

        </div>
    )
}
