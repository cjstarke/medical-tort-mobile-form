import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type CardFrameProps = {
  cardClassName?: string
  imageClassName?: string
  textClassName?: string
  children?: ReactNode
  imageSource?: string
  imageAlt?: string
}

export const CardFrame = ({
  cardClassName,
  imageClassName,
  textClassName,
  children,
  imageSource,
  imageAlt = 'lawsuit',
}: CardFrameProps) => {
  const cardClasses = twMerge(
    'bg-gray-100 w-full p-4 flex flex-col items-center lg:p-12',
    cardClassName
  )
  const imageClasses = twMerge(
    'w-full h-96 object-cover object-center xl:h-128',
    imageClassName
  )
  const textClasses = twMerge(
    'text-2xl px-2 py-10 lg:px-8 lg:text-3xl lg:leading-snug',
    textClassName
  )
  return (
    <div className={cardClasses}>
      <div className="grow w-full">
        <img className={imageClasses} src={imageSource} alt={imageAlt} />
      </div>
      <div className={textClasses}>{children}</div>
    </div>
  )
}

export default CardFrame
