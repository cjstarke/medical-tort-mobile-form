import React, { useEffect, MutableRefObject } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { QuestionObject } from './CLTypes'
import { Dropdown } from './Dropdown'
import { TOption } from './types'

export type MultiStepRadioProps = {
  className?: string
  formSubmit: Function
  id: string
  testId: string
  questionObject: QuestionObject
  step: number
  isBelowForm: boolean
  formRef?: MutableRefObject<HTMLFormElement>
}

export const MultiStepRadio = ({
  formSubmit,
  questionObject,
  id,
  testId,
  isBelowForm,
}: MultiStepRadioProps) => {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: { [`radioQuestion${id}`]: '' },
  })
  const {
    register: registerFixed,
    handleSubmit: handleSubmitFixed,
    control: controlFixed,
    watch: watchFixed,
    reset: resetFixed,
  } = useForm({ defaultValues: { [`radioQuestionFixed${id}`]: '' } })

  const onFormSubmit = (data: any): void => {
    formSubmit(data)
  }

  const watchQuestion: any = watch(`radioQuestion${id}`)
  const watchQuestionFixed: any = watchFixed(`radioQuestionFixed${id}`)

  useEffect(() => {
    if (watchQuestion && !watchQuestionFixed) {
      formSubmit({ qualquestion: { value: watchQuestion } })
      reset()
    }
    if (watchQuestionFixed) {
      if (watchQuestionFixed.value) {
        formSubmit({ qualquestion: { value: watchQuestionFixed.value } })
      } else {
        formSubmit({ qualquestion: { value: watchQuestionFixed } })
      }
      document
        .getElementById('five-step-form')
        ?.scrollIntoView({ behavior: 'smooth' })
      resetFixed()
    }
  }, [watchQuestion, watchQuestionFixed])

  const topBarClasses =
    'fixed -top-[300px] left-0 shadow-lg topbar translate-y-[300px] duration-500 lg:hidden'
  const radioClasses =
    'w-full text-white bg-roundUpLightBlue text-center p-2 uppercase font-medium text-lg rounded-sm w-1/2 hover:bg-roundUpBlue'

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)} id={`${id}-form`}>
        <div className="">
          <p className="text-roundUpBlue text-lg font-semibold leading-tight mb-8 lg:text-xl">
            {questionObject.question}
          </p>

          <div className="space-y-4">
            {questionObject.options.map((option: any, i: number) => {
              return (
                <div key={i}>
                  <input
                    {...register(`radioQuestion${id}`, { required: true })}
                    id={`${id}-${option.name}`}
                    type="radio"
                    value={option.name}
                    className="hidden"
                  />
                  <label htmlFor={`${id}-${option.name}`}>
                    <p
                      data-test-id={`${testId}-option${i + 1}`}
                      className="w-full text-white bg-roundUpLightBlue text-center p-2 uppercase font-medium text-lg rounded-sm hover:bg-roundUpBlue"
                    >
                      {option.name}
                    </p>
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </form>
      <div
        className={`w-full bg-gray-100 ${
          isBelowForm ? topBarClasses : 'relative lg:hidden'
        }`}
      >
        <form
          onSubmit={handleSubmitFixed(onFormSubmit)}
          id={`${id}-form-fixed`}
          className={`px-4 py-4 flex-col ${isBelowForm ? 'flex' : 'hidden'}`}
        >
          {questionObject.options.length < 3 ? (
            <div>
              <p className="text-lg font-semibold text-roundUpBlue mb-4">
                {questionObject.question}
              </p>
              <div className="flex justify-between w-full">
                <input
                  {...registerFixed(`radioQuestionFixed${id}`)}
                  id={`${id}-${questionObject.options[0].name}-fixed`}
                  type="radio"
                  value={questionObject.options[0].value}
                  className="hidden"
                />
                <label
                  htmlFor={`${id}-${questionObject.options[0].name}-fixed`}
                  className="w-1/2 mr-2"
                >
                  <p
                    data-test-id={`${testId}-fixed-option1}`}
                    className={radioClasses}
                  >
                    {questionObject.options[0].name}
                  </p>
                </label>
                <input
                  {...registerFixed(`radioQuestionFixed${id}`)}
                  id={`${id}-${questionObject.options[1].name}-fixed`}
                  type="radio"
                  value={questionObject.options[1].value}
                  className="hidden"
                />
                <label
                  htmlFor={`${id}-${questionObject.options[1].name}-fixed`}
                  className="w-1/2"
                >
                  <p
                    data-test-id={`${testId}-fixed-option2}`}
                    className={radioClasses}
                  >
                    {questionObject.options[1].name}
                  </p>
                </label>
              </div>
            </div>
          ) : (
            <Controller
              name={`radioQuestionFixed${id}`}
              control={controlFixed}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <p className="text-roundUpBlue pb-2 text-lg font-bold mr-2">
                    <span className="questionSpan">
                      {questionObject.question}
                    </span>
                  </p>
                  <Dropdown
                    chevronBlack
                    headingClassName="text-gray-600"
                    listboxClassName="border-roundUpLightBlue rounded-sm ui-open:border-2 focus:border-2 sm:text-base"
                    optionsClassName="border-roundUpLightBlue rounded-sm ui-open:border-2 focus:border-2 sm:text-base"
                    chevronClassName="w-6 mr-4"
                    options={questionObject.options}
                    value={{ name: 'Select one', value: '' }}
                    onChange={(e: TOption) => {
                      field.onChange(e)
                    }}
                    testId={`${testId}-fixed`}
                  ></Dropdown>
                </>
              )}
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default MultiStepRadio
