import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type ButtonProps = {
  id: string
  children: ReactNode
  className?: string
  dataComponentVis?: string
  disabled?: boolean
  href?: string
  onClick?: Function
  tabIndex?: number
  type?: 'button' | 'link' | 'submit'
}

export const Button = ({
  id,
  children,
  className,
  dataComponentVis = 'true',
  disabled,
  href,
  onClick,
  tabIndex = 0,
  type = 'button',
}: ButtonProps) => {
  const classes = twMerge(
    'h-10 disabled:opacity-75 disabled:hover:bg-orange-500 justify-center uppercase inline-flex items-center rounded-lg border border-transparent bg-orange-500 px-6 py-3 font-bold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1',
    className
  )

  const handleClick = () => {
    if (onClick) onClick()
  }

  if (type === 'link') {
    return (
      <a
        tabIndex={tabIndex}
        id={id}
        href={href}
        className={classes}
        data-component-vis={dataComponentVis}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      disabled={disabled}
      tabIndex={tabIndex}
      id={id}
      onClick={handleClick}
      type={type}
      className={classes}
      data-component-vis={dataComponentVis}
    >
      {children}
    </button>
  )
}
