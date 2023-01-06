import React from 'react'

export const ErrorPageFunctinol = () => {
    const BackHandler=()=>{
      window.location.reload()
    }
  return (
    <div>
        <h2>Something went wrong...</h2>
        <button onClick={BackHandler}>Back</button>
    </div>
  )
}
