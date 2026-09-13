import { ReactNode, useState, useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { ObserverFormContext } from '../contexts/ObserverFormContext'

export type ObserverFormProps = {
  children: ReactNode
  className?: string
}
export const ObserverForm = ({ children, className }: ObserverFormProps) => {
  const observerRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const [isBelowForm, setIsBelowForm] = useState(false)
  const [observerBottom, setObserverBottom] = useState(10000)

  const classes = twMerge('', className)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
      setObserverBottom(entry.boundingClientRect.bottom)
    })
    observer.observe(observerRef.current!)
  }, [])

  useEffect(() => {
    if (!isVisible && observerBottom < 10) {
      setIsBelowForm(true)
    } else if (isBelowForm) {
      setIsBelowForm(false)
    }
  }, [isVisible])

  return (
    <ObserverFormContext.Provider value={{ isBelowForm, setIsBelowForm }}>
      <div ref={observerRef} className={classes}>
        {children}
      </div>
    </ObserverFormContext.Provider>
  )
}
export default ObserverForm
