import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Alert } from './Alert'

export type InputProps = {
  id: string
  alertClassName?: string
  alertInnerClassName?: string
  autoFocus?: boolean
  className?: string
  error?: boolean
  errorMessage?: string
  label?: string
  maxLength?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value?: string
  wrapperClassName?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      alertClassName,
      alertInnerClassName,
      autoFocus,
      className,
      error,
      errorMessage,
      label,
      maxLength,
      onChange,
      placeholder,
      type,
      value,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const classes = twMerge(
      'border border-gray-400 px-2 py-2 w-full',
      className
    )

    const wrapperClasses = twMerge('flex flex-col', wrapperClassName)

    return (
      <div className={wrapperClasses}>
        <>
          {label && (
            <label htmlFor={id} className="sr-only">
              {label}
            </label>
          )}
          <input
            {...props}
            id={id}
            ref={ref}
            autoFocus={autoFocus}
            className={classes}
            {...(maxLength ? { maxLength } : {})}
            {...(onChange ? { onChange } : {})}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        </>

        {error && (
          <Alert
            className={alertClassName}
            status="error"
            inverted={true}
            innerClassName={alertInnerClassName}
          >
            {errorMessage || 'Error'}
          </Alert>
        )}
      </div>
    )
  }
)
