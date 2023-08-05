import React from 'react'

const Button = (props) => {
  let classNames = "border border-gray-300 rounded-full px-4 text-sm font-bold h-8"
  if (props.outline) {
    classNames += " text-gray-300"
  } else {
    classNames += " bg-gray-300 text-reddit_dark"
  }

  return (
    <button {...props} className={`${classNames} ${props.className}`} />
  )
}

export default Button