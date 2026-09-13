import React from "react";
import { twMerge } from "tailwind-merge";

export type WarningProps = {className?: string, imgClassName?: string, textClassName?: string};

export const Warning = ({className, imgClassName, textClassName}: WarningProps) => {
  const classes = twMerge("flex flex-col items-center  space-y-8  lg:space-y-0 lg:space-x-8 pt-16 w-4/5 max-w-lg pb-24 lg:flex-row lg:items-start lg:justify-between lg:w-5/6 lg:max-w-screen-xl mx-auto", className)
  const imgClasses = twMerge("w-full lg:max-w-md xl:max-w-lg lg:pt-4", imgClassName)
  const textClasses = twMerge("text-3xl font-semibold leading-normal lg:max-w-lg", textClassName)
  

  return (
    <div className={classes}>
      <img
        className={imgClasses}
        src="https://converge-strapi-prod.s3.amazonaws.com/urgentfooter_63a45de0c0.svg"
      />

      <div className={textClasses}>
        Due to each state&apos;s statute of limitations, which is typically two
        to four years, there&apos;s a{" "}
        <span className="text-red-600">limited amount of time</span> to file
        your lawsuit.​
      </div>
    </div>
  );
};

export default Warning;
