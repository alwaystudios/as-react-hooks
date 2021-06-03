import { useState } from 'react'

export const useSteps = (maximumSteps: number) => {
  const firstStep = 1
  const [step, setStep] = useState(firstStep)

  const incrementStep = () => {
    if (step === maximumSteps) {
      return
    }

    setStep(step + 1)
  }

  const decrementStep = () => {
    if (step === firstStep) {
      return
    }

    setStep(step - 1)
  }

  return { step, incrementStep, decrementStep }
}
