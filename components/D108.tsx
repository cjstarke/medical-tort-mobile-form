import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type D108Props = {
  id: string
  children: ReactNode
  className?: string
  title?: string
}

export const D108 = ({
  id,
  children,
  className,
  title = 'Section D108',
}: D108Props) => {
  const classes = twMerge(
    'flex lg:flex-row flex-col h-28 sm:h-20 w-full justify-center items-center text-center bg-gradient-to-r from-startRed to-endRed text-white overflow-x-hidden',
    className
  )

  return (
    <div
      id={id}
      title={title}
      className={classes}
      data-component-type="d-108"
      data-component-vis="true"
    >
      {children}
    </div>
  )
}
