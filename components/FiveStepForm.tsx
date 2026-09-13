import { useContext, useState, useRef, ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './Button'
import { Input } from './Input'
import { Alert } from './Alert'
import { D108 } from './D108'
import { ObserverFormContext } from '../contexts/ObserverFormContext'
import MultiStepFirstStep from './MultiStepFirstStep'
import MultiStepRadio from './MultiStepRadio'
import MultiStepDropdown from './MultiStepDropdown'
import { QuestionObject } from './CLTypes'
import FormStepDisplay from './FormStepDisplay'
import { attorneyQuestion } from '../data/questionObjects'

type FiveStepFormProps = {
  questions: QuestionObject[]
  onSuccess: Function
  onKnockout: Function
  children?: ReactNode
  knockouts: Function
}

const FiveStepForm = ({
  questions,
  onSuccess,
  onKnockout,
  children,
  knockouts,
}: FiveStepFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    question1: { value: '' },
    question2: { value: '' },
    question3: { value: '' },
    questionAttorney: { value: '' },
  })

  const formRef = useRef<HTMLFormElement>(null)

  const { isBelowForm } = useContext(ObserverFormContext)

  const onQuestionSubmit = (data: any) => {
    switch (step) {
      case 0:
        setAnswers({ ...answers, question1: data.qualquestion })
        break
      case 1:
        setAnswers({ ...answers, question2: data.qualquestion })
        break
      case 2:
        setAnswers({ ...answers, question3: data.qualquestion })
        break
      case 3:
        setAnswers({ ...answers, questionAttorney: data.qualquestion })
        break
      default:
        break
    }
    setStep(step + 1)
  }

  const onSubmit = (): void => {
    setIsSubmitting(true)

    if (knockouts(answers)) {
      onKnockout(true)
      return
    }

    // removed sending payload to api logic

    onSuccess(true)
  }

  return (
    <div
      id="five-step-form"
      className={`${
        step !== 0 ? 'bg-gray-100' : 'bg-white'
      } w-full min-h-screen flex flex-col justify-between lg:fixed  top-0 right-0  lg:bg-gray-100 lg:min-h-0 lg:h-screen lg:pt-24 lg:overflow-y-auto  lg:w-125 xl:w-132 2xl:w-135`}
    >
      <div className="lg:hidden">
        <D108
          id="section-banner-mobile"
          className="h-auto bg-white bg-gradient-to-r from-white to-white py-3  pl-6 items-start"
        >
          <img
            className="w-52 xs:w-60"
            src="https://converge-strapi-prod.s3.amazonaws.com/lifelinelogo_92ba047243.svg?updated_at=2023-08-29T19:48:22.130Z"
          />
        </D108>
      </div>

      <div className={` ${step === 0 ? 'block' : 'hidden'}`}>{children}</div>

      <div
        className={` px-4 bg-gray-100 lg:px-8   flex flex-col  ${
          step !== 0 ? 'grow justify-center ' : 'grow justify-end'
        }`}
      >
        {questions.map((question: QuestionObject, index: number) => {
          return (
            <div
              key={`question-${index}`}
              className={`${step === index ? '' : 'hidden'} ${
                index === 0 ? 'flex flex-col grow' : 'block'
              }`}
            >
              {index === 0 ? (
                <MultiStepFirstStep
                  formSubmit={onQuestionSubmit}
                  id={`step-${index}`}
                  questionObject={question}
                  isBelowForm={isBelowForm}
                />
              ) : (
                <>
                  {question.type === 'radio' ? (
                    <MultiStepRadio
                      step={index + 1}
                      formSubmit={onQuestionSubmit}
                      id={`step-${index}`}
                      questionObject={question}
                      isBelowForm={isBelowForm}
                      testId={`q${index + 1}`}
                    />
                  ) : (
                    <MultiStepDropdown
                      formSubmit={onQuestionSubmit}
                      id={`step-${index}`}
                      questionObject={question}
                      isBelowForm={isBelowForm}
                      testId={`q${index + 1}`}
                    />
                  )}
                </>
              )}
            </div>
          )
        })}
        <div className={step === 3 ? '' : 'hidden'}>
          <MultiStepRadio
            step={3}
            formSubmit={onQuestionSubmit}
            id={`step-3`}
            questionObject={attorneyQuestion}
            isBelowForm={isBelowForm}
            testId={`qAttorney`}
          />
        </div>

        <div className={step === 4 ? 'block' : 'hidden'}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="w-full"
            ref={formRef}
          >
            <p className="px-0 pt-1 text-base xs:text-lg font-bold text-roundUpBlue lg:text-base xl:text-lg lg:px-0 xl:pt-12">
              Enter your contact information below:
            </p>
            <div className="flex flex-col space-y-2 xs:space-y-4 px-0 pt-4 lg:px-0">
              <div className="">
                <Input
                  className="border-roundUpLightBlue rounded-sm py-2 xs:py-3 focus:outline-0 "
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
                  className="border-roundUpLightBlue rounded-sm py-2 xs:py-3 "
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
              <div className="lg:flex lg:space-x-4">
                <div className="lg:w-1/2 mb-2 xs:mb-4">
                  <Input
                    className="border-roundUpLightBlue rounded-sm py-2 xs:py-3 "
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

                <div className="lg:w-1/2">
                  <Input
                    className="border-roundUpLightBlue rounded-sm py-2 xs:py-3 "
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
            <div className="px-0 xs:pt-4  py-2 lg:px-0 lg:py-2">
              <Button
                disabled={isSubmitting}
                id="form-submit-button"
                type="submit"
                className=" xs:h-16 w-full justify-center rounded-sm py-2 xs:py-3 text-lg font-bold text-white bg-roundUpLightBlue hover:bg-roundUpBlue disabled:bg-roundUpLightBlue/50 disabled:hover:bg-roundUpLightBlue/50 h-auto"
              >
                {isSubmitting ? 'PROCESSING' : 'GET YOUR FREE CASE REVIEW'}
              </Button>
            </div>
          </form>
          <p></p>
        </div>
      </div>
      <div className={step < 1 ? 'hidden' : 'px-4 bg-gray-100 lg:px-8'}>
        <Button
          id={'back-button'}
          className="w-full bg-gray-400 mb-6 rounded-sm hover:bg-roundUpLightBlue lg:mb-8"
          onClick={() => {
            setStep(step - 1)
          }}
        >
          back
        </Button>
        <FormStepDisplay currentStep={step} steps={5} />
      </div>
    </div>
  )
}

export default FiveStepForm
