import React from "react";

export type FormStepDisplayProps = { currentStep: number; steps: number };

export const FormStepDisplay = ({ currentStep, steps }: FormStepDisplayProps) => {
  return (
    <div className="flex w-full space-x-2 pb-6 lg:pb-8">
      {[...Array(steps)].map((_step: number, i: number) => {
        return (
          <div
            className={`bg-gray-300 w-full rounded-full h-1 ${
              currentStep === i && "bg-roundUpLightBlue"
            }`}
            key={i}
          ></div>
        );
      })}
    </div>
  );
};

export default FormStepDisplay;
