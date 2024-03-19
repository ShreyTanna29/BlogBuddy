import React from 'react'

function Logo({
  className = ""
}) {
  return (
    <h1 className={` font-dancing-script ${className} text-white text-xl `}>BlogBuddy.com</h1>
  )
}

export default Logo