import React from 'react'
import { twMerge } from 'tailwind-merge'
import CardFrame from './CardFrame'

export type MeshCardProps = {
  className?: string
  imageClassName?: string
}

export const MeshCard1 = ({ className, imageClassName }: MeshCardProps) => {
  const classes = twMerge('mb-5 grow lg:p-6 lg:pb-3', className)
  const imageClasses = twMerge("h-96  w-full lg:min-h-full lg:h-1  xl:h-1", imageClassName)
  return (
    <CardFrame
      imageSource="https://converge-strapi-prod.s3.amazonaws.com/surgery1_89f95f7ae5.webp"
      imageAlt="surgery"
      cardClassName={classes}
      imageClassName={imageClasses}
    >
      <p className="font-semibold text-3xl mb-8 lg:mb-5">
        If you have suffered complications from a hernia mesh implant, you may
        qualify for <span className="text-red-500"> compensation.</span>
      </p>
      <p className="text-2xl">
        Hernia mesh implants are commonly used in repair surgeries for weakened
        tissues in need of support. It is the prevalent method of repair, being
        used in nine out of ten hernia procedures annually.
      </p>
    </CardFrame>
  )
}

export const MeshCard2 = ({ className }: MeshCardProps) => {
  const classes = twMerge('mb-6 lg:mb-14', className)
  return (
    <CardFrame
      imageSource="https://converge-strapi-prod.s3.amazonaws.com/stomach_6166d6695a.webp"
      imageAlt="surgery"
      cardClassName={classes}
    >
      <p>
        <span className="font-semibold">When hernia mesh fails, </span> the
        painful and potentially deadly complications require revision surgeries
        to remove the mesh and repair tissues. Revision surgeries are often more
        extensive and complicated than the original procedure and may carry even
        greater risks and recovery time.
      </p>
    </CardFrame>
  )
}

export const MeshCard3 = ({ className }: MeshCardProps) => {
  const classes = twMerge('mb-6', className)
  return (
    <CardFrame
      imageSource="https://converge-strapi-prod.s3.amazonaws.com/woman2_19dd9d2786.webp?updated_at=2023-09-20T18:50:53.017Z"
      imageAlt="surgery"
      cardClassName={classes}
    >
      <p className="font-normal">
        There are various manufacturers of hernia mesh, including Ethicon,
        Covidien, Atrium Medical, and CR Bard, all of which have lawsuits
        pending across the United States.
      </p>
    </CardFrame>
  )
}
