import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type ModalProps = {
  id: string
  children?: ReactNode
  modalClassName?: string
  modalContentClassName?: string
  isModalVisible: boolean
  setIsModalVisible: Function
  delayed?: boolean
}

export const Modal = ({
  id,
  children,
  modalClassName,
  modalContentClassName,
  isModalVisible,
  setIsModalVisible,
  delayed = false,
}: ModalProps) => {
  const modalClasses = twMerge(
    'bg-[#0b0b0b80] fixed flex justify-center items-center left-0  top-0 h-full w-full z-10 overflow-auto',
    modalClassName
  )
  const modalHiddenClasses = twMerge('hidden', modalClassName)
  const modalContentClasses = twMerge(
    'bg-white m-auto min-h-screen relative p-4 w-full lg:h-auto lg:p-8 lg:w-auto lg:min-h-0',
    modalContentClassName
  )

  return (
    <div
      id={`modal-${id}`}
      className={isModalVisible ? modalClasses : modalHiddenClasses}
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div
        id={`form-${id}`}
        className={modalContentClasses}
        data-delayed={delayed}
      >
        <button
          onClick={() => {
            setIsModalVisible(false)
          }}
          className="absolute top-8 right-8 h-[24px] w-[24px] cursor-pointer  lg:top-[32px] lg:right-[32px]"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.4 24L0 21.6L9.6 12L0 2.4L2.4 0L12 9.6L21.6 0L24 2.4L14.4 12L24 21.6L21.6 24L12 14.4L2.4 24Z"
              fill="#293679"
            ></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}
