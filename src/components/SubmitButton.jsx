import React from 'react'

function SubmitButton({children}) {
  return (
    <>
        <button type="submit" className="style-btn" >
            {children}
        </button>
    </>
  )
}

export default SubmitButton