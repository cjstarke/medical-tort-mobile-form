import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type D60Props = {
  id: string
  children?: ReactNode
  className?: string
  title?: string
}

export const D60 = ({
  id,
  children,
  className,
  title = 'Section D60',
}: D60Props) => {
  const classes = twMerge(
    'flex flex-col justify-center p-4 space-y-6 w-full bg-black text-white md:p-12 text-xs',
    className
  )

  return (
    <div
      id={id}
      title={title}
      data-component-type="d-60"
      data-component-vis="true"
      className={classes}
    >
      {children}
    </div>
  )
}
