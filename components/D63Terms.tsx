import { twMerge } from 'tailwind-merge'

export type D63TermsProps = {
  compliance?: string
  contact?: string
  linkClassName?: string
  textClassName?: string
  className?: string
  brand?: string
  legaleseText?: string
}

export const D63Terms = ({
  compliance,
  contact,
  className,
  linkClassName = 'Section D63',
  brand = 'Consumer Lifeline',
  textClassName,
  legaleseText,
}: D63TermsProps) => {
  const classes = twMerge(
    'flex flex-col items-center justify-center rounded-b-lg bg-gray-100',
    className
  )
  const linkClasses = twMerge('font-bold text-primary', linkClassName)
  const textClasses = twMerge('py-10 px-8 text-xs', textClassName)

  const contactLink = contact || '#'
  const privacyPolicyLink = compliance || '#'

  const legalText = legaleseText
    ? legaleseText
    : `        By clicking "GET YOUR FREE CASE REVIEW", I consent to receive calls, SMS
  text messages, emails and/or prerecorded messages from
  ${brand} or its partners, affiliates,
  service providers and clients via automated technologies notwithstanding
  if I am on a DO NOT CALL or equivalent list. These calls/texts may be
  delivered via automated technology within 5 minutes of your submission
  regardless of the time of day and may arrive after 9 PM local time. I
  understand that I am not required to enter into this agreement as a
  condition of any service.`

  return (
    <div className={classes}>
      <p className={textClasses}>
        {legalText}
        <br />
        <br />
        *Required Fields |{' '}
        <a
          className={linkClasses}
          href={privacyPolicyLink}
          target="_blank"
          title="Privacy Policy"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        <br />
        <br />
        If you believe you've reached this page in error or would like to
        opt-out of future correspondence, please{' '}
        <a
          className={linkClasses}
          href={contactLink}
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
