import React from 'react'

function SubmitButton({btnType, className, btnText}) {
  return (
    <>
        <button type={btnType} className={className} >
            {btnText}
        </button>
    </>
  )
}

export default SubmitButton