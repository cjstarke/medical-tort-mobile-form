import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment } from 'react'; // Import from 'react'
import { twMerge } from 'tailwind-merge';
import { FormSubmissionStatus } from '../types/form';
import { LoadingSpinner } from './SVG/LoadingSpinner';
import { CheckSVG } from './SVG/CheckSVG';

export type SubmitModalProps = {
  id?: string
  className?: string
  closeButtonClassName?: string
  formStatus: FormSubmissionStatus
  isOpen: boolean
  strokeColor: string
  thankYouClassName?: string
  toggleModal: any
}

export const SubmitModal = ({
  id,
  className,
  closeButtonClassName,
  formStatus,
  isOpen,
  strokeColor = '#001272',
  thankYouClassName,
  toggleModal,
}: SubmitModalProps) => {
  const classes = twMerge('relative z-10 text-black', className)

  const thankYouClasses = twMerge(
    `text-4xl font-bold text-center text-black`,
    thankYouClassName
  )
  const closeButtonClasses = twMerge(
    'absolute top-4 right-4',
    closeButtonClassName
  )

  let headerText
  let messageText

  switch (formStatus) {
    case FormSubmissionStatus.Success:
      headerText = 'Thank You!'
      messageText =
        'A representative will contact you as soon as possible.'
      break
    case FormSubmissionStatus.Rejected:
      headerText = "Thank you for your interest"
      messageText = 'Unfortunately, we are unable to further pursue any claim on your behalf.'
      break
    case FormSubmissionStatus.Duplicate:
      headerText = 'Thank You!'
      messageText = 'Your submission has already been received.'
      break
    case FormSubmissionStatus.TfCertInvalid:
      headerText = "We're sorry..."
      messageText =
        'We value your privacy and want to confirm your interest in our products and services. Some ad-blockers conflicted with our consent confirmation platform. Please disable any ad-blockers and refresh the page before attempting to submit the form again. Thank you.'
      break
    case FormSubmissionStatus.Error:
    default:
      headerText = "We're sorry..."
      messageText = 'An error has occurred. Please try again later.'
      break
  }

  // Loading spinner is now imported from SVG component

  return (
    <div id={id} data-component-vis={true}>
      {/* Loader */}
      <Transition
        appear
        show={formStatus === FormSubmissionStatus.Submitting && isOpen}
        as={Fragment}
      >
        <Dialog as="div" className={classes} onClose={toggleModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full md:w-7/12 transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all max-w-2xl">
                  <DialogTitle
                    as="div"
                    className={twMerge(thankYouClasses, 'flex justify-center')}
                  >
                    <LoadingSpinner strokeColor={strokeColor} />
                  </DialogTitle>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Finalized Modal Content */}
      <Transition
        appear
        show={
          formStatus !== FormSubmissionStatus.Initial &&
          formStatus !== FormSubmissionStatus.Submitting &&
          isOpen
        }
        as={Fragment}
      >
        <Dialog as="div" className={classes} onClose={toggleModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full md:w-7/12 transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all max-w-2xl">
                  <button className="" onClick={() => toggleModal()}>
                    <div className={closeButtonClasses}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke={strokeColor}
                        className="h-8 w-8"
                      >
                        {' '}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />{' '}
                      </svg>
                    </div>
                  </button>
                  <div className="w-full flex justify-center mb-8">
                    <CheckSVG className="w-20" strokeColor={strokeColor} />
                  </div>

                  <DialogTitle as="h3" className={thankYouClasses}>
                    <div className="font-sans font-bold text-3xl text-center relative">
                      {headerText}
                    </div>
                  </DialogTitle>
                  <DialogPanel>
                    <div className="font-franklin font-light pt-10 text-lg text-center">
                      {messageText}
                    </div>
                    <div className="flex items-center justify-center pt-10">
                      <div className="bg-rba-green-400 h-2 w-[88px]"></div>
                    </div>
                  </DialogPanel>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
