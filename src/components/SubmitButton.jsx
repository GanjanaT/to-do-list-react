import React from 'react'

function SubmitButton({btnText}) {
  return (
    <>
        <button type="submit" className="style-btn" >
            {btnText}
        </button>
    </>
  )
}

export default SubmitButton