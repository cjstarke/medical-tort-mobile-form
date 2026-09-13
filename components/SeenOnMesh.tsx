import React from 'react'

export const SeenOnMesh = () => {
  return (
    <div className="py-8 text-center flex flex-col items-center space-y-4 w-full xl:flex-row xl:justify-between xl:space-y-0 lg:py-14">
      <p className="text-2xl  font-bold uppercase xl:hidden">
        as seen on:
      </p>
      <div className="flex justify-evenly items-center w-full">
        <p className=" hidden text-2xl font-bold uppercase xl:block">
          as seen on:
        </p>
        <img
          className="w-20 xs:w-28 md:w-40 lg:w-36"
          src="https://converge-strapi-prod.s3.amazonaws.com/reuters_1ae5796799.webp"
          alt="reuters"
        />
        <img
          className="w-20 xs:w-24 md:w-36 lg:w-32"
          src="https://converge-strapi-prod.s3.amazonaws.com/bloomberg_23272d99e9.webp"
          alt="bloomberg"
        />
        <img
          className="w-20 xs:w-24 md:w-36 lg:w-28"
          src="https://converge-strapi-prod.s3.amazonaws.com/yahoo_e67c1a4409.webp"
          alt="yahoo"
        />
      </div>
    </div>
  )
}

export default SeenOnMesh
