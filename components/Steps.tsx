import React from 'react'
import { twMerge } from 'tailwind-merge'
import ScrollToButton from './ScrollToButton'

export type StepsProps = {
  className?: string
}

export const Steps = ({
  className,
}: StepsProps) => {
  const classes = twMerge('bg-gray-100 w-full p-8 space-y-8 lg:flex lg:flex-col items-center lg:px-12 lg:pb-16', className)

  return (
    <div className={classes}>
      <p className='text-3xl font-semibold '>Get help right away by following these three simple steps.</p>
      <div className='space-y-8 lg:w-2/3 xl:w-3/4'>
        <div className='flex items-center justify-start'>
          <div className='flex items-center justify-center h-14 w-14 bg-roundUpLightBlue rounded-full mr-6 shrink-0'>
            <p className='text-white font-semibold text-4xl'>1</p>
          </div>
          <p className=' text-xl font-semibold '>Fill out our simple, confidential form.</p>
        </div>
        <div className='flex items-start justify-between'>
          <div className='flex items-center justify-center h-14 w-14 bg-roundUpLightBlue rounded-full mr-6 shrink-0'>
            <p className='text-white font-semibold text-4xl'>2</p>
          </div>
          <p className=' text-xl font-semibold '>A U.S. based professional will contact you promptly to gather some basic information about your concerns.</p>
        </div>
        <div className='flex items-start justify-between'>
          <div className='flex items-center justify-center h-14 w-14 bg-roundUpLightBlue rounded-full mr-6 shrink-0'>
            <p className='text-white font-semibold text-4xl'>3</p>
          </div>
          <p className=' text-xl font-semibold '>You will be connected with a compassionate legal consultation team to review your case.</p>
        </div>
      </div>
      <ScrollToButton componentID='scroll-to' className='md:hidden'/>

    </div>
  )
}

export default Steps
