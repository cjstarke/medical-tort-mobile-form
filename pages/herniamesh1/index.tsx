import { useState } from 'react'
import type { NextPage } from 'next'
import { D60 } from '../../components/D60'
import { D108 } from '../../components/D108'
import SeenOnMesh from '../../components/SeenOnMesh'
import HeaderImage from '../../components/HeaderImage'
import Warning from '../../components/Warning'
import SingleStickyForm from '../../components/SingleStickyForm'
import ObserverForm from '../../components/ObserverForm'
import Head from 'next/head'
import { herniaMeshQuestionObjects } from '../../data/questionObjects'
import { isHerniaMeshKnockout } from '../../api/functions'
import Steps from '../../components/Steps'
import { MeshCard1, MeshCard2, MeshCard3 } from '../../components/MeshCards'
import { FormSubmissionStatus } from '../../types/form'
import { SubmitModal } from '../../components/SubmitModal'

const Index: NextPage = () => {
  const [formStatus, setFormStatus] = useState<FormSubmissionStatus>(
    FormSubmissionStatus.Initial
  )
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const handleFormStatus = (status: FormSubmissionStatus) => {
    setFormStatus(status)
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }


  // Monitor values that will dynamically change the form message text

  return (
    <>
      <Head>
        <title>Hernia Mesh Free Claim Review</title>
      </Head>

      <D108
        id="section-banner"
        className=" bg-white bg-gradient-to-r from-white to-white justify-start md:justify-between h-16  lg:h-auto lg:pt-0 flex w-full flex-row relative z-5 lg:fixed shadow-sm"
      >
        <img
          className="w-64 sm:w-80 lg:w-96 ml-6 sm:ml-8"
          src="https://converge-strapi-prod.s3.amazonaws.com/lifelinelogo_92ba047243.svg?updated_at=2023-08-29T19:48:22.130Z"
        />
        <img
          className="w-64 hidden lg:block"
          src="https://converge-strapi-prod.s3.amazonaws.com/urgent_859dded953.svg"
        />
      </D108>

      <div className="flex flex-col  w-full  relative justify-between lg:flex-row lg:items-stretch lg:pt-20 lg:mb-14 font-openSans">
        <div className="flex flex-col justify-between items-center lg:grow lg:w-2/3 ">
          <HeaderImage />

          <div className="hidden lg:flex w-full flex-col items-center grow justify-between">
            <SeenOnMesh />

            <div className="w-full px-8 max-w-4xl  flex flex-col grow justify-between">
              <MeshCard1 />
              <Steps />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-2/5 lg:max-w-xl">
          <div className="px-6 pt-8  pb-6 lg:bg-gray-100 lg:pt-12 ">
            <p className="text-roundUpBlue text-3xl font-semibold xl:text-4xl 2xl:text-5xl">
              Have you had <br className="sm:hidden lg:block" /> complications{' '}
              <br className="hidden" /> from a
            </p>

            <p className="text-red-500 text-4xl my-3 xs:text-5xl font-bold uppercase 2xl:text-6xl xl:my-5">
              hernia mesh?
            </p>

            <p
              id="scroll-to"
              className="text-base max-w-md xs:text-lg xs:leading-tight font-medium lg:font-normal 2xl:text-xl 2xl:leading-tight"
            >
              You may be entitled to financial compensation. Fill out our quick
              and easy form to see if you qualify today with a{' '}
              <span className="lg:font-semibold">free case evaluation.</span>
            </p>

            <div className="hidden lg:block h-[5px] w-1/2 bg-roundUpLightBlue rounded-full lg:mt-12 xl:mt-12"></div>
          </div>

          <ObserverForm>
            <SingleStickyForm
              questions={herniaMeshQuestionObjects}
              className="mt-4 bg-gray-100 md:mt-10 lg:mt-0"
              knockouts={isHerniaMeshKnockout}
              fourRows={true}
              tcpaSubmitBtnText="GET YOUR FREE CASE REVIEW"
              formStatus={formStatus}
              setFormStatus={handleFormStatus}
              toggleModal={toggleModal}
            ></SingleStickyForm>
          </ObserverForm>

        </div>

        <div className="lg:hidden">
          <SeenOnMesh />
          <MeshCard1 />
          <Steps className="mb-6" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center lg:px-12">
        <div className="lg:max-w-screen-xl">
          <MeshCard2 />
          <MeshCard3 />
          <Warning />
        </div>
      </div>

      <SubmitModal
        id="section-submit-modal"
        formStatus={formStatus}
        isOpen={modalVisible}
        strokeColor="#001272"
        toggleModal={toggleModal}
      />

      <div className="pb-6 bg-black">
        <D60 id="footer-terms" title="Terms">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </D60>
      </div>
    </>
  )
}

export default Index
