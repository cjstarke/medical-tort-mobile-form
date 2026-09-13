import React, { useEffect, MutableRefObject } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { QuestionObject } from './CLTypes'
import { Dropdown } from './Dropdown'
import { TOption } from './types'
import { Button } from './Button'
import { Alert } from './Alert'

export type MultiStepDropdownProps = {
  formSubmit: Function
  id: string
  testId: string
  questionObject: QuestionObject
  isBelowForm: boolean
  formRef?: MutableRefObject<HTMLFormElement>
}

export const MultiStepDropdown = ({
  formSubmit,
  questionObject,
  id,
  testId,
  isBelowForm,
}: MultiStepDropdownProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const {
    handleSubmit: handleSubmitFixed,
    control: controlFixed,
    watch: watchFixed,
    reset: resetFixed,
  } = useForm({ defaultValues: { [`dropdownQuestionFixed${id}`]: '' } })

  const onFormSubmit = (data: any): void => {
    formSubmit({ qualquestion: { value: data[`dropdownQuestion${id}`].value } })
  }

  const watchQuestionFixed: any = watchFixed(`dropdownQuestionFixed${id}`)

  useEffect(() => {
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
  }, [watchQuestionFixed])

  const topBarClasses =
    'fixed -top-[300px] left-0 shadow-lg topbar translate-y-[300px] duration-500 lg:hidden'

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)} id={`${id}-form`}>
        <Controller
          name={`dropdownQuestion${id}`}
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <>
              <p className="text-roundUpBlue pb-2 text-lg font-bold mr-2">
                <span className="questionSpan">{questionObject.question}</span>
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
                testId={testId}
              ></Dropdown>
            </>
          )}
        />
        {errors[`dropdownQuestion${id}`] && (
          <Alert status="error" inverted={true}>
            Please select an option.
          </Alert>
        )}
        <Button
          id={`${id}-submit`}
          type="submit"
          className="w-full bg-roundUpLightBlue rounded-sm my-8 hover:bg-roundUpBlue"
        >
          Next
        </Button>
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
          <Controller
            name={`dropdownQuestionFixed${id}`}
            control={controlFixed}
            rules={{ required: true }}
            defaultValue=""
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
                ></Dropdown>
              </>
            )}
          />
        </form>
      </div>
    </div>
  )
}

export default MultiStepDropdown
