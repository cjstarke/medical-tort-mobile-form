import { useContext, useEffect, useState, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Dropdown } from './Dropdown'
import { TOption } from './types'
import { Alert } from './Alert'
import { Button } from './Button'
import { Input } from './Input'
import { twMerge } from 'tailwind-merge'
import { ObserverFormContext } from '../contexts/ObserverFormContext'
import { QuestionObject } from './CLTypes'
import { FormSubmissionStatus } from '../types/form'

type SingleStickyFormProps = {
  questions: QuestionObject[]
  className?: string
  knockouts: Function
  fourRows?: boolean
  tcpaSubmitBtnText?: string
  formStatus: FormSubmissionStatus
  setFormStatus: Function
  toggleModal: Function
}

const SingleStickyForm = ({
  questions,

  className,
  knockouts,
  fourRows,
  formStatus,
  setFormStatus,
  toggleModal,
}: SingleStickyFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({})

  const [nextQuestion, setNextQuestion] = useState(0)

  const formRef = useRef<HTMLFormElement>(null)

  const { isBelowForm } = useContext(ObserverFormContext)

  const q4 = 'Are you currently represented by an attorney?'

  const watchquestion1 = watch('question1')
  const watchquestion2 = watch('question2')
  const watchquestion3 = watch('question3')
  const watchquestion4 = watch('question4')
  const watchCancerArr = [
    watchquestion1,
    watchquestion2,
    watchquestion3,
    watchquestion4,
  ]

  useEffect(() => {
    let formBottom = formRef.current?.getBoundingClientRect().bottom
    if (formBottom && formBottom < 0) {
      formRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    for (let i = 0; i < watchCancerArr.length; i++) {
      if (watchCancerArr[i]?.value) {
        setNextQuestion(i + 1)
      } else {
        break
      }
    }
  }, [watchquestion1, watchquestion2, watchquestion3, watchquestion4])

  const onSubmit = async (data: any) => {
    toggleModal()
    setFormStatus(FormSubmissionStatus.Submitting)

    if (knockouts(data)) {
      setFormStatus(FormSubmissionStatus.Rejected)
      return
    }

    // removed sending payload to api logic

    setFormStatus(FormSubmissionStatus.Success)
  }

  const classes = twMerge('w-full', className)

  const topBarClasses =
    'fixed -top-[300px] left-0 shadow-lg topbar translate-y-[300px] duration-500'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="form"
      className={classes}
      ref={formRef}
    >
      <div className="flex flex-col">
        {questions.map((question: QuestionObject, index: number) => {
          return (
            <div
              key={`question-${index + 1}`}
              className={`w-full bg-gray-100 px-6 py-4 ${
                isBelowForm && nextQuestion == index
                  ? topBarClasses
                  : 'relative'
              } lg:relative lg:px-8`}
              id={`q${index + 1}-outer-div`}
            >
              <Controller
                name={`question${index + 1}`}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <p className="text-roundUpBlue pb-2 text-xl md:text-2xl font-bold mr-2 md:w-[85%]">
                      <span className="questionSpan">{question.question}</span>
                    </p>

                    <Dropdown
                      chevronBlack
                      headingClassName="text-gray-600"
                      listboxClassName="border-roundUpLightBlue rounded-sm ui-open:border-2 focus:border-2 sm:text-base"
                      optionsClassName="border-roundUpLightBlue rounded-sm ui-open:border-2 focus:border-2 sm:text-base"
                      chevronClassName="w-6 mr-4"
                      options={question.options}
                      value={{ name: 'Select one', value: '' }}
                      onChange={(e: TOption) => {
                        field.onChange(e)
                      }}
                      testId={`q${index + 1}`}
                    ></Dropdown>
                  </>
                )}
              />

              {errors[`question${index + 1}`] && (
                <Alert status="error" inverted={true}>
                  Please select an option.
                </Alert>
              )}
            </div>
          )
        })}

        <p className="px-6 pt-6 text-xl md:text-2xl font-bold text-roundUpBlue lg:px-8">
          Enter your contact information below:
        </p>
        <div className="flex flex-col space-y-4 px-6 pt-4 lg:px-8">
          <div className="">
            <Input
              className="border-roundUpLightBlue rounded-sm py-3 focus:outline-0"
              label="First Name"
              type="text"
              id="firstName"
              placeholder="First Name*"
              {...register('firstName', {
                required: true,
                pattern: /^([- \w\d\u00c0-\u024f]+)$/,
              })}
            />

            {errors.firstName && (
              <Alert status="error" inverted={true}>
                First Name is required
              </Alert>
            )}
          </div>

          <div className="">
            <Input
              className="border-roundUpLightBlue rounded-sm py-3"
              label="Last Name"
              type="text"
              id="lastName"
              placeholder="Last Name*"
              {...register('lastName', {
                required: true,
                pattern: /^([- \w\d\u00c0-\u024f]+)$/,
              })}
            />

            {errors.lastName && (
              <Alert status="error" inverted={true}>
                Last Name is required
              </Alert>
            )}
          </div>
          <div className={fourRows ? '' : 'lg:flex lg:space-x-4'}>
            <div className={fourRows ? 'mb-4' : 'lg:w-1/2 mb-4'}>
              <Input
                className="border-roundUpLightBlue rounded-sm py-3"
                label="Email"
                type="email"
                id="email"
                placeholder="Email*"
                {...register('email', {
                  required: 'Please enter a valid email address.',
                  pattern:
                    /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/,
                })}
              />

              {errors.email && (
                <Alert status="error" inverted={true}>
                  Email is required
                </Alert>
              )}
            </div>

            <div className={fourRows ? 'lg:mb-4' : 'lg:w-1/2'}>
              <Input
                className="border-roundUpLightBlue rounded-sm py-3"
                label="Phone Number"
                type="text"
                id="phone"
                placeholder="Phone*"
                {...register('phone', {
                  required: true,
                  pattern:
                    /^(\+0?1\s)?\(?[2-9]{1}[0-9]{2}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                })}
              />

              {errors.phone && (
                <Alert status="error" inverted={true}>
                  Phone is required
                </Alert>
              )}
            </div>
          </div>
        </div>
        <div
          className={` w-full bg-gray-100 px-6 py-4 ${
            isBelowForm && nextQuestion == 3 ? topBarClasses : 'relative'
          } lg:relative lg:px-8`}
          id={`q4-outer-div`}
        >
          <Controller
            name="questionAttorney"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <p className="text-roundUpBlue pb-2 text-xl md:text-2xl font-bold mr-2 md:w-[85%]">
                  <span className="questionSpan">{q4}</span>
                </p>

                <Dropdown
                  chevronBlack
                  headingClassName="text-gray-600"
                  listboxClassName="border-roundUpLightBlue rounded-sm ui-open:border-2 focus:border-2 sm:text-base"
                  optionsClassName="border-roundUpLightBlue rounded-sm ui-open:border-2 focus:border-2 sm:text-base"
                  chevronClassName="w-6 mr-4"
                  options={[
                    { name: 'Yes', value: 'Yes' },
                    { name: 'No', value: 'No' },
                  ]}
                  value={{ name: 'Select one', value: '' }}
                  onChange={(e: TOption) => {
                    field.onChange(e)
                  }}
                  testId="qAttorney"
                ></Dropdown>
              </>
            )}
          />

          {errors.questionAttorney && (
            <Alert status="error" inverted={true}>
              Please select an option.
            </Alert>
          )}
        </div>

        <div className="px-4 pt-6 lg:px-8">
          <Button
            disabled={formStatus !== FormSubmissionStatus.Initial}
            id="form-submit-button"
            type="submit"
            className=" h-16 w-full justify-center rounded-sm py-8 text-xl font-bold text-white bg-roundUpLightBlue hover:bg-roundUpBlue disabled:bg-roundUpLightBlue/50 disabled:hover:bg-roundUpLightBlue/50 "
          >
            {formStatus !== FormSubmissionStatus.Initial
              ? 'PROCESSING'
              : 'AGREE AND GET YOUR FREE CASE REVIEW'}
          </Button>
        </div>
        <p className="text-gray-600 px-4 lg:px-8 pt-6 text-sm pb-12">
          *Required Fields
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </form>
  )
}

export default SingleStickyForm
