import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { TOption } from './types'
import { twMerge } from 'tailwind-merge'

export type DropdownProps = {
  className?: string
  options: TOption[]
  onChange?: Function
  value: TOption
  listboxClassName?: string
  headingClassName?: string
  iconClassName?: string
  chevronClassName?: string
  textBoxClassName?: string
  chevronBlack?: boolean
  optionsClassName?: string
  testId?: string
}

export const Dropdown = ({
  className,
  options,
  onChange,
  value,
  listboxClassName,
  headingClassName,
  iconClassName,
  chevronClassName,
  textBoxClassName,
  chevronBlack,
  optionsClassName,
  testId,
}: DropdownProps) => {
  const [selected, setSelected] = useState(value)
  const classes = twMerge('w-full', className)
  const listboxClasses = twMerge(
    'relative w-full cursor-default border border-gray-400 bg-white py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800 sm:text-sm',
    listboxClassName
  )
  const iconClasses = twMerge(
    'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2',
    iconClassName
  )
  const headingClasses = twMerge('block truncate', headingClassName)
  const chevronClasses = twMerge('h-12 w-12 text-gray-400', chevronClassName)
  const textBoxClasses = twMerge('relative mt-1', textBoxClassName)
  const OptionsClasses = twMerge(
    'absolute z-50 mt-1 max-h-60 w-full overflow-auto border border-gray-400 bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
    optionsClassName
  )

  const handleOnChange = (option: TOption) => {
    setSelected(option)
    onChange && onChange(option)
  }

  return (
    <div className={classes}>
      <Listbox value={value} onChange={handleOnChange}>
        <div className={textBoxClasses}>
          <Listbox.Button
            className={listboxClasses}
            data-test-id={testId ? testId : 'listbox'}
          >
            <span className={headingClasses}>{selected.name}</span>
            <span className={iconClasses}>
              {chevronBlack ? (
                <img
                  className={chevronClasses}
                  src="https://converge-strapi-prod.s3.amazonaws.com/downarrow_68400a33a6.svg?updated_at=2023-08-23T18:55:30.278Z"
                  alt="down"
                />
              ) : (
                <ChevronDownIcon
                  className={chevronClasses}
                  aria-hidden="true"
                />
              )}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={OptionsClasses}>
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        data-test-id={`${testId}-option${optionIdx + 1}`}
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
