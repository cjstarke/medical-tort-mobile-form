import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { QuestionObject } from './CLTypes'
import { Dropdown } from './Dropdown'
import { TOption } from './types'
import { Button } from './Button'
import { Alert } from './Alert'

export type MultiStepFirstStepProps = {
  formSubmit: Function
  id: string
  questionObject: QuestionObject
  isBelowForm: boolean
}

export const MultiStepFirstStep = ({
  formSubmit,
  questionObject,
  id,
  isBelowForm,
}: MultiStepFirstStepProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({})
  const {
    handleSubmit: handleSubmitFixed,
    control: controlFixed,
    getValues,
    formState: { isDirty, dirtyFields },
  } = useForm({ defaultValues: { fixedQuestion: '' } })

  const onFormSubmit = (data: any): void => {
    formSubmit({ qualquestion: { value: data.qualquestion.value } })
  }

  useEffect(() => {
    if (isDirty) {
      const fixedValues: any = getValues('fixedQuestion')
      formSubmit({ qualquestion: { value: fixedValues.value } })
      document
        .getElementById('five-step-form')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isDirty, dirtyFields])

  const topBarClasses =
    'fixed -top-[300px] left-0 shadow-lg topbar translate-y-[300px] duration-500 lg:hidden'

  return (
    <>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        id={`${id}-form`}
        className="h-full grow flex "
      >
        <div className="flex flex-col justify-between grow">
          <div>
            <Controller
              name="qualquestion"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div>
                  <p className="text-roundUpBlue pb-4 pt-3 xs:pt-10 xs:text-lg font-bold mr-2 lg:text-xl">
                    <span className="questionSpan">
                      {questionObject.question}
                    </span>
                  </p>
                  <Dropdown
                    chevronBlack
                    headingClassName="text-gray-600"
                    listboxClassName="border-roundUpLightBlue rounded-sm ui-open:border-2 focus:border-2 sm:text-base"
                    optionsClassName="border-roundUpLightBlue rounded-sm ui-open:border-2 focus:border-2 sm:text-base dropdown-above-mobile dropdown-above"
                    chevronClassName="w-6 mr-4"
                    options={questionObject.options}
                    value={{ name: 'Select one', value: '' }}
                    onChange={(e: TOption) => {
                      field.onChange(e)
                    }}
                    testId="q1"
                  ></Dropdown>
                </div>
              )}
            />
          </div>

          {errors?.qualquestion && (
            <Alert status="error" inverted={true}>
              Please select an option.
            </Alert>
          )}
          <div>
            <Button
              id={`${id}-submit`}
              type="submit"
              className="w-full bg-roundUpLightBlue rounded-sm my-8 hover:bg-roundUpBlue"
            >
              Next
            </Button>
            <div className="flex w-full space-x-2 pb-6 lg:pb-8">
              {[...Array(5)].map((_num: number, i: number) => {
                return (
                  <div
                    className={`bg-gray-300 w-full rounded-full h-1 ${
                      i === 0 && 'bg-roundUpLightBlue'
                    }`}
                    key={i}
                  ></div>
                )
              })}
            </div>
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
          {' '}
          <Controller
            name="fixedQuestion"
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
                  testId="q1-fixed"
                ></Dropdown>
              </>
            )}
          />
        </form>
      </div>
    </>
  )
}

export default MultiStepFirstStep
