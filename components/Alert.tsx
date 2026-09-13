import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  InformationCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export type AlertProps = {
  icon?: boolean
  children: ReactNode
  className?: string
  innerClassName?: string
  status?: 'info' | 'success' | 'warning' | 'error'
  inverted?: boolean
}

export const Alert = ({
  icon = false,
  children,
  className,
  innerClassName,
  status = 'info',
  inverted = false,
}: AlertProps) => {
  const classes = twMerge('', className)

  const statusClasses = {
    info: inverted ? 'bg-transparent text-info' : 'bg-info text-white',
    success: inverted ? 'bg-transparent text-success' : 'bg-success text-white',
    warning: inverted ? 'bg-transparent text-warning' : 'bg-warning text-black',
    error: inverted ? 'bg-transparent text-error' : 'bg-error text-white',
  }

  const statusIcons = {
    info: <InformationCircleIcon className="mr-2 h-4 w-4 text-gray-700" />,
    success: <CheckCircleIcon className="mr-2 h-4 w-4" />,
    warning: <ExclamationTriangleIcon className="mr-2 h-4 w-4" />,
    error: <ExclamationCircleIcon className="mr-2 h-4 w-4" />,
  }

  const innerClasses = twMerge(
    'px-2 py-1 flex items-center text-xs',
    statusClasses[status],
    innerClassName
  )

  return (
    <div role="alert" className={classes}>
      <div className={innerClasses}>
        {icon && statusIcons[status]}
        {children}
      </div>
    </div>
  )
}
