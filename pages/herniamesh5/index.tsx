import { useState } from 'react'
import type { NextPage } from 'next'
import { D60 } from '../../components/D60'
import { Modal } from '../../components/Modal'
import { D108 } from '../../components/D108'
import SeenOnMesh from '../../components/SeenOnMesh'
import { MeshCard1, MeshCard2, MeshCard3 } from '../../components/MeshCards'
import HeaderImage from '../../components/HeaderImage'
import Warning from '../../components/Warning'
import FiveStepForm from '../../components/FiveStepForm'
import ObserverForm from '../../components/ObserverForm'
import Head from 'next/head'
import { herniaMeshQuestionObjects } from '../../data/questionObjects'
import { isHerniaMeshKnockout } from '../../api/functions'
import Steps from '../../components/Steps'
import ModalNoOffer from '../../components/ModalNoOffer'

const Index: NextPage = () => {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)
  const [isDuplicateModalVisible, setIsDuplicateModalVisible] = useState(false)
  const [isKnockoutModalVisible, setIsKnockoutModalVisible] = useState(false)


  return (
    <>
      <Head>
        <title>Hernia Mesh Free Claim Review</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          property="og:url"
          content="https://consumerlifeline.com/herniamesh5"
        />
        <meta
          name="description"
          property="og:description"
          content="Defective hernia mesh is causing pain and suffering for thousands of hernia surgery patients. "
        />
        <meta
          property="og:image"
          content="https://converge-strapi-prod.s3.amazonaws.com/cfavicon_e3eabb497e.webp"
        />
        <link
          rel="shortcut icon"
          type="image/webp"
          href="https://converge-strapi-prod.s3.amazonaws.com/cfavicon_e3eabb497e.webp"
        />
      </Head>
      <div className="font-openSans">
        <D108
          id="section-banner"
          className=" bg-white bg-gradient-to-r from-white to-white md:justify-between md:pt-4 lg:h-auto lg:pt-0 hidden lg:flex w-full flex-row relative z-5 fixed shadow-sm"
        >
          <img
            className="w-96 ml-8"
            src="https://converge-strapi-prod.s3.amazonaws.com/lifelinelogo_92ba047243.svg?updated_at=2023-08-29T19:48:22.130Z"
          />
          <img
            className="w-64"
            src="https://converge-strapi-prod.s3.amazonaws.com/urgent_859dded953.svg"
          />
        </D108>
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="w-min hidden lg:flex flex-col  pt-20 grow items-center">
            <HeaderImage />
            <div className="w-full lg:max-w-screen-xl flex flex-col items-center">
              <SeenOnMesh />
              <div className="px-8 xl:px-12 2xl:px-20">
                <MeshCard1
                  className="lg:p-12"
                  imageClassName="lg:h-96 xl:h-96"
                />
                <Steps className="my-10" />
                <MeshCard2 className="lg:text-2xl" />
                <MeshCard3 />
                <Warning
                  className="lg:flex-col lg:space-y-8 lg:space-x-0 lg:items-center"
                  imgClassName="xl:max-w-[38rem]"
                  textClassName="xl:max-w-[38rem]"
                />
              </div>
            </div>
            <D60 id="footer-terms" title="Terms" className="relative">
              <p>
                {' '}
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </p>
            </D60>
          </div>
          <div className="block  w-full lg:w-125 xl:w-132 2xl:w-135 ">
            <ObserverForm className="w-full">
              <FiveStepForm
                knockouts={isHerniaMeshKnockout}
                questions={herniaMeshQuestionObjects}
                onSuccess={setIsSuccessModalVisible}
                onKnockout={setIsKnockoutModalVisible}
              >
                <>
                  <HeaderImage
                    className="lg:hidden"
                    bannerClassName="text-xs font-semibold px-4 py-2 sm:py-4 xs:text-base"
                    imgClassName="min-h-[100px] xs:min-h-[140px] sm:min-h-[180px] md:min-h-[200px]"
                  />
                  <div className="px-4 py-4 sm:py-8 lg:px-8">
                    <div className="space-y-1 xs:space-y-2 lg:space-y-4">
                      <p className="text-roundUpBlue text-2xl leading-tight w-72 font-bold sm:w-full md:text-3xl xl:text-4xl lg:font-semibold xl:w-96">
                        Have you had complications from a
                      </p>
                      <p className="text-red-500 uppercase text-3xl xs:text-4xl  sm:text-5xl font-bold lg:text-[2.8rem] xl:text-6xl lg:pb-4">
                        hernia mesh?
                      </p>
                      <p className="font-bold text-sm xs:leading-tight  xs:text-base  sm:text-lg lg:text-lg lg:font-normal">
                        You may be entitled to financial compensation. Fill out
                        our quick and easy form to see if you qualify today with
                        a{' '}
                        <span className="font-bold">free case evaluation.</span>
                      </p>
                    </div>
                    <div className="hidden lg:block h-[5px] w-1/2 bg-roundUpLightBlue rounded-full mt-8"></div>
                  </div>
                </>
              </FiveStepForm>
            </ObserverForm>
          </div>
          <div className="lg:hidden">
            <SeenOnMesh />
            <MeshCard1 />
            <Steps className="mb-6" />
            <MeshCard2 />
            <MeshCard3 />
            <D60 id="footer-terms" title="Terms" className="relative">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </D60>
          </div>
        </div>

        <Modal
          id="success"
          isModalVisible={isSuccessModalVisible}
          setIsModalVisible={setIsSuccessModalVisible}
        >
          <ModalNoOffer modalID="success" className="text-roundUpBlue" />
        </Modal>
        <Modal
          id="fail-duplicate"
          isModalVisible={isDuplicateModalVisible}
          setIsModalVisible={setIsDuplicateModalVisible}
        >
          <ModalNoOffer
            heading="Thank you for your interest"
            subheading="Your submission has already been received."
            modalID="fail-duplicate"
            className="text-roundUpBlue"
          />
        </Modal>

        <Modal
          id="fail-knockout"
          isModalVisible={isKnockoutModalVisible}
          setIsModalVisible={setIsKnockoutModalVisible}
        >
          <ModalNoOffer
            heading="Thank you for your interest"
            subheading="Unfortunately, we are unable to further pursue any claim on your behalf."
            modalID="fail-knockout"
            className="text-roundUpBlue"
          />
        </Modal>
      </div>
    </>
  )
}

export default Index
