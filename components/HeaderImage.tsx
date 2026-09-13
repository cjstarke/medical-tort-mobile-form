import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type HeaderImageProps = {
  bannerClassName?: string
  className?: string
  imgClassName?: string
  children?: ReactNode
}

export const HeaderImage = ({
  bannerClassName,
  className,
  imgClassName,
  children = (
    <p>
      Defective hernia mesh is causing pain and suffering for thousands of
      hernia surgery patients. Over{' '}
      <span className="lg:font-extrabold">20,000</span> hernia mesh lawsuits
      have been filed.
    </p>
  ),
}: HeaderImageProps) => {
  const bannerClasses = twMerge(
    'bg-roundUpBlue font-medium px-6 py-4 text-center text-white uppercase  text-base leading-tight sm:text-lg sm:leading-tight lg:text-left lg:font-normal lg:text-2xl  2xl:text-3xl ',
    bannerClassName
  )
  const classes = twMerge('w-full md:flex md:flex-col', className)
  const imgClasses = twMerge(
    'bg-bottom  bg-cover hernia-header-bg min-h-[140px] xs:min-h-[180px]  sm:min-h-[300px] md:min-h-[400px] lg:min-h-[320px] xl:min-h-[360px] 3xl:min-h-[400px]',
    imgClassName
  )

  return (
    <>
      <div className={classes}>
        <div className="lg:order-2">
          <div id="image-banner-text" className={bannerClasses}>
            {children}
          </div>
        </div>
        <div className={imgClasses}></div>
      </div>
    </>
  )
}

export default HeaderImage
