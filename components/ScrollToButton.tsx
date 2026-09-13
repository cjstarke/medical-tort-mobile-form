import React from 'react'
import { twMerge } from 'tailwind-merge'

export type ScrollToButtonProps = {
  className?: string
  message?: string
  componentID?: string
}

export const ScrollToButton = ({
  className,
  message = 'See if you qualify',
  componentID = 'form',
}: ScrollToButtonProps) => {
  const classes = twMerge(
    'bg-roundUpLightBlue text-white rounded-md w-full text-center py-4 text-2xl font-semibold uppercase',
    className
  )
  const handleOnClick = () => {
    document.getElementById(componentID)?.scrollIntoView()
  }

  return (
    <button className={classes} onClick={handleOnClick}>
      {message}
    </button>
  )
}

export default ScrollToButton
