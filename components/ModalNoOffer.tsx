import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type ModalNoOfferProps = {
  children?: ReactNode
  className?: string
  checkImg?: string
  heading?: string
  subheading?: string
  modalID: string
}

export const ModalNoOffer = ({
  className,
  checkImg = 'https://converge-strapi-prod.s3.amazonaws.com/bluecheck_d745d6f265.webp',
  heading = 'Thank You',
  subheading = 'A representative will contact you as soon as possible.',
  modalID,
}: ModalNoOfferProps) => {
  const classes = twMerge('w-full flex justify-center items-center', className)

  return (
    <div className={classes} id={modalID}>
      <div className="flex flex w-full  flex-col items-center justify-center space-y-3 text-center lg:space-y-5">
        <img className="w-16 lg:w-20" src={checkImg} alt="check" />
        <h2 className="text-3xl font-bold lg:text-4xl">{heading}</h2>
        <h3 className="text-lg font-bold lg:text-xl">{subheading}</h3>
      </div>
    </div>
  )
}
export default ModalNoOffer
