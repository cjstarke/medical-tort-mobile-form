import { twMerge } from 'tailwind-merge'

export type FormOptOutProps = {
  containerClassName?: string
  linkClassName?: string
  textClassName?: string
  optOutLink: string
}

export const FormOptOut = ({
  containerClassName,
  linkClassName,
  textClassName,
  optOutLink,
}: FormOptOutProps) => {
  const containerClasses = twMerge(
    'flex flex-col items-center justify-center rounded-b-lg bg-gray-100',
    containerClassName
  )
  const linkClasses = twMerge('font-bold text-primary', linkClassName)
  const textClasses = twMerge('py-10 px-8 text-xs', textClassName)

  return (
    <div id="section-form-opt-out" className={containerClasses}>
      <p className={textClasses}>
        If you believe you've reached this page in error or would like to
        opt-out of future correspondence, please{' '}
        <a
          className={linkClasses}
          href={optOutLink}
          target="_blank"
          title="Contact Us"
          rel="noreferrer"
        >
          Contact Us
        </a>
        .
      </p>
    </div>
  )
}
